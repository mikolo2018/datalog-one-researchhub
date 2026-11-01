'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { mathoepediaTopics } from '@/lib/mathoepedia-questions';

type PublicQuestion = { id:number; topic:string; difficulty:string; prompt:string; options:string[] };
type Answer = { questionId:number; answer:string; responseMs:number };
type Result = { score:number; total:number; percentage:number; topics:Array<{topic:string;correct:number;total:number;percentage:number}>; strengths:string[]; review:string[]; message:string };
type Participant = { id:string;pupil_name:string;class_name?:string;score?:number;total?:number;percentage?:number;completed_at?:string;feedback?:{topics?:Array<{topic:string;percentage:number}>} };
type TeacherData = { session:{join_code:string;title:string;status:string};participants:Participant[];metrics:{joined:number;completed:number;average:number;topicPerformance:Array<{topic:string;percentage:number;correct:number;total:number}>} };

const post = async (url:string, body:unknown) => {
  const response = await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
  const data = await response.json();
  if(!response.ok) throw new Error(data.error || 'Request failed.');
  return data;
};

export default function MathoepediaLiveQuiz(){
  const [mode,setMode]=useState<'join'|'host'>('join');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  const [attempt,setAttempt]=useState<{participantId:string;token:string;session:{title:string;joinCode:string;secondsPerQuestion:number};questions:PublicQuestion[]}|null>(null);
  const [answers,setAnswers]=useState<Answer[]>([]);
  const [current,setCurrent]=useState(0);
  const [result,setResult]=useState<Result|null>(null);
  const [questionStarted,setQuestionStarted]=useState(Date.now());
  const [teacher,setTeacher]=useState<{hostKey:string;joinCode:string}|null>(null);
  const [teacherData,setTeacherData]=useState<TeacherData|null>(null);
  const [hostAction,setHostAction]=useState<'create'|'recover'>('create');
  const [excelUrl,setExcelUrl]=useState('');

  const selected = useMemo(()=>new Map(answers.map((item)=>[item.questionId,item.answer])),[answers]);

  async function join(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setError(''); setLoading(true);
    const form=new FormData(event.currentTarget);
    try{const data=await post('/api/mathoepedia/join',{joinCode:form.get('joinCode'),pupilName:form.get('pupilName'),className:form.get('className')});setAttempt(data);setQuestionStarted(Date.now());}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to join.')}finally{setLoading(false)}
  }

  function choose(questionId:number,answer:string){
    setAnswers((items)=>[...items.filter((item)=>item.questionId!==questionId),{questionId,answer,responseMs:Date.now()-questionStarted}]);
  }

  async function finish(){
    if(!attempt)return; setError('');setLoading(true);
    try{const data=await post('/api/mathoepedia/submit',{participantId:attempt.participantId,token:attempt.token,answers});setResult(data.result);}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to submit.')}finally{setLoading(false)}
  }

  async function createSession(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setError('');setLoading(true);
    const form=new FormData(event.currentTarget);const hostKey=String(form.get('hostKey')||'');
    try{const data=await post('/api/mathoepedia/sessions',{hostKey,title:form.get('title'),category:form.get('category'),difficulty:form.get('difficulty'),questionCount:form.get('questionCount'),secondsPerQuestion:form.get('secondsPerQuestion')});const state={hostKey,joinCode:data.session.join_code};setTeacher(state);sessionStorage.setItem('matho-host',JSON.stringify(state));}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to create session.')}finally{setLoading(false)}
  }

  async function recoverSession(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setError('');setLoading(true);
    const form=new FormData(event.currentTarget);
    const state={hostKey:String(form.get('hostKey')||''),joinCode:String(form.get('joinCode')||'').trim().toUpperCase()};
    try{await post('/api/mathoepedia/results',state);setTeacher(state);setMode('host');setExcelUrl('');sessionStorage.setItem('matho-host',JSON.stringify(state));}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to reopen the results.')}finally{setLoading(false)}
  }

  useEffect(()=>{try{const saved=JSON.parse(sessionStorage.getItem('matho-host')||'null');if(saved?.hostKey&&saved?.joinCode){setTeacher(saved);setMode('host')}}catch{}},[]);

  async function refreshTeacher(state=teacher){
    if(!state)return;
    try{const data=await post('/api/mathoepedia/results',state);setTeacherData(data);setError('');}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to load results.')}
  }

  useEffect(()=>{if(!teacher)return;refreshTeacher(teacher);const timer=window.setInterval(()=>refreshTeacher(teacher),5000);return()=>window.clearInterval(timer)},[teacher?.joinCode]);

  async function closeSession(){if(!teacher)return;setLoading(true);try{await fetch('/api/mathoepedia/sessions',{method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify(teacher)});await refreshTeacher();}finally{setLoading(false)}}

  async function exportResults(){if(!teacher)return;const response=await fetch('/api/mathoepedia/export',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(teacher)});if(!response.ok){setError(await response.text());return}const blob=await response.blob();const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download='mathoepedia-'+teacher.joinCode+'-results.csv';anchor.click();URL.revokeObjectURL(url)}

  async function createExcelLink(){
    if(!teacher)return;setLoading(true);setError('');
    try{const data=await post('/api/mathoepedia/excel-link',teacher);setExcelUrl(data.url);}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to create the Excel connection.')}finally{setLoading(false)}
  }

  async function copyExcelLink(){if(!excelUrl)return;await navigator.clipboard.writeText(excelUrl);}
  function leaveDashboard(){setTeacher(null);setTeacherData(null);setExcelUrl('');sessionStorage.removeItem('matho-host');}

  if(result)return <section className="live-result-card"><span className="eyebrow">Performance feedback</span><div className="live-score">{result.score}/{result.total}<small>{result.percentage}%</small></div><h2>{result.message}</h2><div className="live-topic-grid">{result.topics.map((topic)=><article key={topic.topic}><strong>{topic.topic}</strong><span>{topic.correct}/{topic.total} correct</span><div><i style={{width:topic.percentage+'%'}} /></div><b>{topic.percentage}%</b></article>)}</div>{result.review.length>0&&<p><strong>Next practice:</strong> {result.review.join(', ')}</p>}</section>;

  if(attempt){
    const question=attempt.questions[current];const answered=selected.has(question.id);
    return <section className="live-quiz-card"><div className="live-quiz-head"><div><span className="eyebrow">{attempt.session.title}</span><h2>Question {current+1} of {attempt.questions.length}</h2></div><strong>{Math.round(answers.length/attempt.questions.length*100)}% answered</strong></div><div className="live-progress"><i style={{width:((current+1)/attempt.questions.length*100)+'%'}} /></div><div className="matho-question-head"><span>{question.topic}</span><span>{question.difficulty}</span></div><h3 className="live-prompt">{question.prompt}</h3><div className="live-options">{question.options.map((option,index)=>{const letter='ABCD'[index];return <button type="button" className={selected.get(question.id)===letter?'selected':''} onClick={()=>choose(question.id,letter)} key={option}><b>{letter}</b><span>{option}</span></button>})}</div><div className="live-nav"><button className="secondary-btn" type="button" disabled={current===0} onClick={()=>{setCurrent((value)=>value-1);setQuestionStarted(Date.now())}}>Previous</button>{current<attempt.questions.length-1?<button className="btn" type="button" disabled={!answered} onClick={()=>{setCurrent((value)=>value+1);setQuestionStarted(Date.now())}}>Next question</button>:<button className="btn" type="button" disabled={answers.length!==attempt.questions.length||loading} onClick={finish}>{loading?'Saving…':'Submit quiz'}</button>}</div>{error&&<p className="live-error">{error}</p>}</section>;
  }

  if(mode==='host'&&teacher){
    return <section className="live-host-dashboard">
      <div className="live-code-panel"><span>{teacherData?.session.status==='closed'?'RESULTS ARCHIVE':'LIVE SESSION CODE'}</span><strong>{teacher.joinCode}</strong><p>{teacherData?.session.status==='closed'?'This session is closed. The saved results remain available.':'Ask pupils to open this page and enter the code.'}</p><div><button className="secondary-btn" onClick={()=>refreshTeacher()}>Refresh</button><button className="secondary-btn" onClick={exportResults}>Download for Excel</button><button className="secondary-btn" onClick={createExcelLink}>{loading?'Preparing…':'Connect live Excel'}</button><button className="secondary-btn" onClick={leaveDashboard}>Open another session</button><button className="btn" onClick={closeSession} disabled={teacherData?.session.status==='closed'||loading}>Close session</button></div></div>
      {excelUrl&&<div className="live-excel-feed"><span className="eyebrow">Live Excel connection</span><h3>Refreshable results feed</h3><p>Connect the workbook once, then let Excel pull the latest results from the website.</p><ol><li>In Excel, select <strong>Data → Get Data → From Web</strong>.</li><li>Paste the private link below and load the table.</li><li>In Query Properties, select <strong>Refresh every 1 minute</strong> if you want automatic updates.</li></ol><div className="live-excel-url"><input value={excelUrl} readOnly aria-label="Live Excel feed URL" /><button type="button" className="btn" onClick={copyExcelLink}>Copy link</button></div><p className="live-private-note">Keep this link private. Creating a new link for this session immediately replaces the previous one.</p></div>}
      {teacherData&&<><div className="live-metrics"><article><span>Joined</span><strong>{teacherData.metrics.joined}</strong></article><article><span>Completed</span><strong>{teacherData.metrics.completed}</strong></article><article><span>Class average</span><strong>{teacherData.metrics.average}%</strong></article></div><div className="live-topic-grid">{teacherData.metrics.topicPerformance.map((topic)=><article key={topic.topic}><strong>{topic.topic}</strong><span>{topic.correct}/{topic.total} correct</span><div><i style={{width:topic.percentage+'%'}} /></div><b>{topic.percentage}%</b></article>)}</div><div className="live-table-wrap"><table><thead><tr><th>Pupil</th><th>Class</th><th>Status</th><th>Score</th><th>Percentage</th></tr></thead><tbody>{teacherData.participants.map((participant)=><tr key={participant.id}><td>{participant.pupil_name}</td><td>{participant.class_name||'—'}</td><td>{participant.completed_at?'Completed':'In progress'}</td><td>{participant.completed_at?participant.score+'/'+participant.total:'—'}</td><td>{participant.completed_at?participant.percentage+'%':'—'}</td></tr>)}</tbody></table></div></>}
      {error&&<p className="live-error">{error}</p>}
    </section>
  }

  return <div className="live-entry-shell"><div className="live-mode-tabs"><button className={mode==='join'?'active':''} onClick={()=>setMode('join')}>Join as pupil</button><button className={mode==='host'?'active':''} onClick={()=>setMode('host')}>Teacher dashboard</button></div>{mode==='join'?<form className="live-entry-card" onSubmit={join}><span className="eyebrow">Pupil entry</span><h2>Join a Mathoepedia live quiz</h2><label>Session code<input name="joinCode" maxLength={6} placeholder="ABC234" required /></label><label>Pupil name<input name="pupilName" maxLength={100} required /></label><label>Class or group<input name="className" maxLength={80} placeholder="Primary 6" /></label><button className="btn" disabled={loading}>{loading?'Joining…':'Join quiz'}</button></form>:<><div className="live-host-choice"><button className={hostAction==='create'?'active':''} onClick={()=>setHostAction('create')}>Create new quiz</button><button className={hostAction==='recover'?'active':''} onClick={()=>setHostAction('recover')}>Reopen saved results</button></div>{hostAction==='create'?<form className="live-entry-card" onSubmit={createSession}><span className="eyebrow">Teacher control</span><h2>Create a live quiz session</h2><label>Teacher access key<input name="hostKey" type="password" required /></label><label>Session title<input name="title" defaultValue="Mathoepedia Live Challenge" required /></label><div className="live-form-grid"><label>Category<select name="category"><option>All</option>{mathoepediaTopics.map((topic)=><option key={topic}>{topic}</option>)}</select></label><label>Difficulty<select name="difficulty"><option>All</option><option>Foundation</option><option>Bridge</option><option>Competition</option></select></label><label>Questions<input name="questionCount" type="number" min={4} max={40} defaultValue={10} /></label><label>Seconds per question<input name="secondsPerQuestion" type="number" min={20} max={300} defaultValue={60} /></label></div><button className="btn" disabled={loading}>{loading?'Creating…':'Create live session'}</button></form>:<form className="live-entry-card" onSubmit={recoverSession}><span className="eyebrow">Results recovery</span><h2>Reopen a quiz dashboard</h2><p className="muted">Enter the same code issued to pupils. Results remain available even if the teacher page was closed or the session has ended.</p><label>Teacher access key<input name="hostKey" type="password" required /></label><label>Pupil session code<input name="joinCode" maxLength={6} placeholder="ABC234" required /></label><button className="btn" disabled={loading}>{loading?'Opening…':'Open results dashboard'}</button></form>}</>}{error&&<p className="live-error">{error}</p>}</div>
}
