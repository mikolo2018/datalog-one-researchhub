import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { mathoepediaQuestions, type MathoepediaQuestion } from '@/lib/mathoepedia-questions';
import { authorizeTeacher, clean } from '@/lib/mathoepedia-quiz-security';

const escapeHtml=(value:unknown)=>String(value??'').replace(/[&<>"']/g,(character)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]||character));

function response(html:string,status=200){
  return new Response(html,{status,headers:{
    'content-type':'text/html; charset=utf-8',
    'cache-control':'no-store, private',
    'content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
    'referrer-policy':'no-referrer',
    'x-content-type-options':'nosniff'
  }});
}

export async function POST(request:Request){
  const form=await request.formData();
  const joinCode=clean(form.get('joinCode'),6).toUpperCase();
  const db=createSupabaseAdminClient();
  if(!db)return response('<h1>Revision paper unavailable</h1><p>The quiz database is unavailable.</p>',503);
  const authorization=await authorizeTeacher(db,form.get('hostKey'));
  if(!authorization)return response('<h1>Teacher access denied</h1><p>The teacher access key is incorrect, expired or suspended.</p>',401);
  const {data:session}=await db.from('matho_quiz_sessions').select('id,join_code,title,category,difficulty,question_ids,seconds_per_question,status,created_at,closed_at,teacher_access_id').eq('join_code',joinCode).maybeSingle();
  if(!session)return response('<h1>Session not found</h1><p>Check the six-character session code and try again.</p>',404);
  if(authorization.kind==='teacher'&&session.teacher_access_id!==authorization.id)return response('<h1>Access denied</h1><p>This session belongs to another teacher account.</p>',403);
  if(session.status!=='closed')return response('<h1>Close the session first</h1><p>The revision paper becomes available after the live quiz has been closed.</p>',409);

  const bank=new Map(mathoepediaQuestions.map((question)=>[question.id,question]));
  const questions=(session.question_ids as number[]).map((id)=>bank.get(id)).filter((question):question is MathoepediaQuestion=>Boolean(question));
  const questionPages=questions.map((question,index)=>{
    const options=question.options.map((option,optionIndex)=>'<li><strong>'+escapeHtml('ABCD'[optionIndex])+'.</strong> '+escapeHtml(option)+'</li>').join('');
    return '<article class="question"><div class="tag">'+escapeHtml(question.topic)+' - '+escapeHtml(question.difficulty)+'</div><h2>'+(index+1)+'. '+escapeHtml(question.prompt)+'</h2><ol class="options">'+options+'</ol></article>';
  }).join('');
  const answerPages=questions.map((question,index)=>{
    const answerIndex='ABCD'.indexOf(question.answer);
    return '<article class="answer"><h3>'+(index+1)+'. '+escapeHtml(question.answer)+(answerIndex>=0?' - '+escapeHtml(question.options[answerIndex]):'')+'</h3><p>'+escapeHtml(question.explanation)+'</p></article>';
  }).join('');
  const closedAt=session.closed_at?new Date(session.closed_at).toLocaleString('en-NG',{timeZone:'Africa/Lagos',dateStyle:'medium',timeStyle:'short'}):'Closed session';
  const html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapeHtml(session.title)+' - Revision Paper</title><style>'+
  '@page{size:A4;margin:15mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#172033;line-height:1.45}.toolbar{position:sticky;top:0;display:flex;justify-content:center;padding:12px;background:#071f59}.toolbar button{border:0;border-radius:9px;padding:11px 18px;background:#f2a313;color:#071f59;font-weight:800;cursor:pointer}.cover{border:3px solid #071f59;border-radius:18px;padding:28px;margin-bottom:22px;background:linear-gradient(135deg,#f7faff,#fff7e6)}.brand{color:#071f59;font-weight:900;letter-spacing:.1em}.cover h1{color:#071f59;font-size:30px;line-height:1.15;margin:18px 0 8px}.meta{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:18px}.meta span{padding:9px 11px;border:1px solid #dbe3ef;border-radius:8px;background:#fff}.question{break-inside:avoid;border-bottom:1px solid #dfe5ee;padding:13px 0 17px}.question h2{font-size:17px;line-height:1.4;margin:7px 0}.tag{color:#9a6500;font-size:10px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.options{list-style:none;padding:0;margin:8px 0;display:grid;grid-template-columns:1fr 1fr;gap:7px}.options li{padding:8px 10px;border:1px solid #dfe5ee;border-radius:7px}.answer-key{page-break-before:always}.answer-key>h2{color:#071f59;border-bottom:3px solid #f2a313;padding-bottom:8px}.answer{break-inside:avoid;padding:9px 0;border-bottom:1px solid #e3e7ee}.answer h3{font-size:15px;color:#12683c;margin:0}.answer p{margin:4px 0;color:#4f5c70}.footer{margin-top:22px;padding-top:10px;border-top:1px solid #dfe5ee;color:#687386;font-size:11px}@media print{.toolbar{display:none}.cover{margin-top:0}.question{padding-top:10px}}@media(max-width:650px){.meta,.options{grid-template-columns:1fr}}'+
  '</style></head><body><div class="toolbar"><button onclick="window.print()">Print / Save as PDF</button></div><main><section class="cover"><div class="brand">DATALOG ICT - MATHOEPEDIA</div><h1>'+escapeHtml(session.title)+'</h1><p>Teacher revision paper with answer key and worked explanations.</p><div class="meta"><span><strong>Session:</strong> '+escapeHtml(session.join_code)+'</span><span><strong>Closed:</strong> '+escapeHtml(closedAt)+'</span><span><strong>Questions:</strong> '+questions.length+'</span><span><strong>Time per question:</strong> '+escapeHtml(session.seconds_per_question)+' seconds</span><span><strong>Category:</strong> '+escapeHtml(session.category)+'</span><span><strong>Difficulty:</strong> '+escapeHtml(session.difficulty)+'</span></div></section><section><h2>Session Questions</h2>'+questionPages+'</section><section class="answer-key"><h2>Teacher Answer Key and Explanations</h2>'+answerPages+'</section><p class="footer">Generated from the closed Mathoepedia session on datalogict.com for teaching and revision.</p></main><script>window.addEventListener("load",function(){setTimeout(function(){window.print()},400)})</script></body></html>';
  return response(html);
}
