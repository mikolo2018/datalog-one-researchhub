import type { Metadata } from 'next';
import Link from 'next/link';
import MathoepediaLiveQuiz from '@/components/MathoepediaLiveQuiz';
import { mathoepediaQuestions } from '@/lib/mathoepedia-questions';

export const metadata: Metadata = {
  title: 'Mathoepedia Live Quiz | Datalog ICT',
  description: 'Host or join a timed Mathoepedia mathematics quiz using a bank of 900+ questions, automatic progression, performance feedback and teacher revision papers.',
};

export default function MathoepediaLivePage(){
  return <main>
    <section className="matho-live-hero"><div className="container"><span className="eyebrow light">Mathoepedia Live</span><h1>Run a live mathematics challenge and see learning as it happens.</h1><p>The {mathoepediaQuestions.length.toLocaleString('en-NG')}-question bank powers sessions joined with a six-character code. Each question follows the teacher-assigned countdown, advances automatically at zero, and produces learner, class, Excel and post-session revision records.</p></div></section>
    <nav className="school-subnav" aria-label="School resources sections"><div className="container"><Link href="/schools">School Services</Link><Link href="/schools/resources">Assessment Samples</Link><Link href="/schools/mathoepedia">Question Library</Link><Link className="active" href="/schools/mathoepedia/live">Live Quiz</Link><Link href="/schools/mathoepedia/access">Teacher Access</Link></div></nav>
    <section className="section"><div className="container"><MathoepediaLiveQuiz /></div></section>
    <section className="section alt"><div className="container"><div className="section-heading"><span className="eyebrow">What the feedback records</span><h2>Useful data for instruction and intervention.</h2></div><div className="grid grid3"><article className="card"><h3>Learner performance</h3><p>Score, percentage, completion time and topic-by-topic accuracy.</p></article><article className="card"><h3>Class performance</h3><p>Participation, completion, class average, strengths and misconceptions.</p></article><article className="card"><h3>Excel and PDF records</h3><p>Download structured Excel results and, after closing the session, open an A4 question paper with answers and explanations for class revision or saving as PDF.</p></article></div></div></section>
  </main>
}
