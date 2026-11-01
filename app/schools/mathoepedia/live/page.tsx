import type { Metadata } from 'next';
import Link from 'next/link';
import MathoepediaLiveQuiz from '@/components/MathoepediaLiveQuiz';

export const metadata: Metadata = {
  title: 'Mathoepedia Live Quiz | Datalog ICT',
  description: 'Host or join a live Mathoepedia mathematics quiz with immediate learner and class performance feedback.',
};

export default function MathoepediaLivePage(){
  return <main>
    <section className="matho-live-hero"><div className="container"><span className="eyebrow light">Mathoepedia Live</span><h1>Run a live mathematics challenge and see learning as it happens.</h1><p>Pupils join with a six-character code. Answers are marked automatically and translated into topic-level feedback for the learner, teacher and Excel reporting.</p></div></section>
    <nav className="school-subnav" aria-label="School resources sections"><div className="container"><Link href="/schools">School Services</Link><Link href="/schools/resources">Assessment Samples</Link><Link href="/schools/mathoepedia">Question Library</Link><Link className="active" href="/schools/mathoepedia/live">Live Quiz</Link></div></nav>
    <section className="section"><div className="container"><MathoepediaLiveQuiz /></div></section>
    <section className="section alt"><div className="container"><div className="section-heading"><span className="eyebrow">What the feedback records</span><h2>Useful data for instruction and intervention.</h2></div><div className="grid grid3"><article className="card"><h3>Learner performance</h3><p>Score, percentage, completion time and topic-by-topic accuracy.</p></article><article className="card"><h3>Class performance</h3><p>Participation, completion, class average, strengths and misconceptions.</p></article><article className="card"><h3>Excel records</h3><p>Download a structured CSV that opens directly in Excel for grading, filtering and longitudinal analysis.</p></article></div></div></section>
  </main>
}
