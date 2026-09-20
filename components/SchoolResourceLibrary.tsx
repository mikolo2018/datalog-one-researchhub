'use client';

import { useState } from 'react';

type Subject = 'Mathematics' | 'English' | 'Science';

const resources: Array<{
  number: number;
  subject: Subject;
  level: string;
  title: string;
  coverage: string;
  file: string;
}> = [
  { number: 1, subject: 'Mathematics', level: 'Primary 4', title: 'Primary 4 Mathematics', coverage: 'Number, operations, measurement, geometry and patterns', file: 'sample-01-primary-4-mathematics.pdf' },
  { number: 2, subject: 'Mathematics', level: 'Primary 5', title: 'Primary 5 Mathematics', coverage: 'Operations, fractions, measurement, geometry and data', file: 'sample-02-primary-5-mathematics.pdf' },
  { number: 3, subject: 'Mathematics', level: 'Primary 6', title: 'Primary 6 Mathematics', coverage: 'Fractions, problem solving, perimeter, area and averages', file: 'sample-03-primary-6-mathematics.pdf' },
  { number: 4, subject: 'Mathematics', level: 'JSS 1', title: 'JSS 1 Mathematics', coverage: 'Number, introductory algebra, geometry, patterns and data', file: 'sample-04-jss-1-mathematics.pdf' },
  { number: 5, subject: 'Mathematics', level: 'JSS 2', title: 'JSS 2 Mathematics', coverage: 'Algebra, factorisation, measurement, geometry and statistics', file: 'sample-05-jss-2-mathematics.pdf' },
  { number: 6, subject: 'Mathematics', level: 'JSS 3', title: 'JSS 3 Mathematics', coverage: 'Equations, factorisation, geometry and applied problem solving', file: 'sample-06-jss-3-mathematics.pdf' },
  { number: 7, subject: 'Mathematics', level: 'SSS 1', title: 'SSS 1 Mathematics', coverage: 'Algebra, coordinate geometry, trigonometry and statistics', file: 'sample-07-sss-1-mathematics.pdf' },
  { number: 8, subject: 'English', level: 'Primary 4', title: 'Primary 4 English Language', coverage: 'Grammar, vocabulary, punctuation, comprehension and writing', file: 'sample-08-primary-4-english.pdf' },
  { number: 9, subject: 'English', level: 'Primary 5', title: 'Primary 5 English Language', coverage: 'Word classes, tense, vocabulary, comprehension and composition', file: 'sample-09-primary-5-english.pdf' },
  { number: 10, subject: 'English', level: 'Primary 6', title: 'Primary 6 English Language', coverage: 'Usage, grammar, vocabulary, comprehension and writing', file: 'sample-10-primary-6-english.pdf' },
  { number: 11, subject: 'English', level: 'JSS 1', title: 'JSS 1 English Language', coverage: 'Grammar, vocabulary, figures of speech and writing', file: 'sample-11-jss-1-english.pdf' },
  { number: 12, subject: 'English', level: 'JSS 2', title: 'JSS 2 English Language', coverage: 'Concord, clauses, voice, vocabulary and composition', file: 'sample-12-jss-2-english.pdf' },
  { number: 13, subject: 'English', level: 'JSS 3', title: 'JSS 3 English Language', coverage: 'Advanced usage, literary devices, comprehension and writing', file: 'sample-13-jss-3-english.pdf' },
  { number: 14, subject: 'English', level: 'SSS 1', title: 'SSS 1 English Language', coverage: 'Concord, clauses, register, vocabulary and comprehension', file: 'sample-14-sss-1-english.pdf' },
  { number: 15, subject: 'Science', level: 'Primary 4', title: 'Primary 4 Science', coverage: 'Living things, matter, force, health and the environment', file: 'sample-15-primary-4-science.pdf' },
  { number: 16, subject: 'Science', level: 'Primary 5', title: 'Primary 5 Science', coverage: 'Plants, body systems, energy, machines and the environment', file: 'sample-16-primary-5-science.pdf' },
  { number: 17, subject: 'Science', level: 'Primary 6', title: 'Primary 6 Science', coverage: 'Body systems, matter, energy, ecology and microorganisms', file: 'sample-17-primary-6-science.pdf' },
  { number: 18, subject: 'Science', level: 'JSS 1', title: 'JSS 1 Basic Science', coverage: 'Cells, measurement, matter, energy and scientific enquiry', file: 'sample-18-jss-1-science.pdf' },
  { number: 19, subject: 'Science', level: 'JSS 2', title: 'JSS 2 Basic Science', coverage: 'Life processes, motion, electricity, acids and separation', file: 'sample-19-jss-2-science.pdf' },
  { number: 20, subject: 'Science', level: 'JSS 3', title: 'JSS 3 Basic Science', coverage: 'Atoms, forces, body systems, ecology and chemical change', file: 'sample-20-jss-3-science.pdf' },
];

const tabs: Array<'All' | Subject> = ['All', 'Mathematics', 'English', 'Science'];

export default function SchoolResourceLibrary() {
  const [active, setActive] = useState<(typeof tabs)[number]>('All');
  const visible = active === 'All' ? resources : resources.filter((resource) => resource.subject === active);

  return <>
    <div className="resource-tabs" role="tablist" aria-label="Filter assessment samples by subject">
      {tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={active === tab} className={active === tab ? 'active' : ''} onClick={() => setActive(tab)}>{tab}</button>)}
    </div>
    <p className="resource-count" aria-live="polite">Showing {visible.length} downloadable sample{visible.length === 1 ? '' : 's'}</p>
    <div className="resource-grid">
      {visible.map((resource) => <article className={`resource-card subject-${resource.subject.toLowerCase()}`} key={resource.number}>
        <div className="resource-card-top"><span>Sample {String(resource.number).padStart(2, '0')}</span><span>{resource.subject}</span></div>
        <h2>{resource.title}</h2>
        <strong>{resource.level}</strong>
        <p>{resource.coverage}</p>
        <ul><li>10 objective questions</li><li>3 structured-response tasks</li><li>Teacher answer key included</li><li>Layered Datalog watermark</li></ul>
        <a className="btn resource-download" href={`/downloads/schools/${resource.file}`} download>Download PDF <span aria-hidden="true">↓</span></a>
      </article>)}
    </div>
  </>;
}

