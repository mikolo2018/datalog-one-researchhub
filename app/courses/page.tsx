import CatalogGrid from '@/components/CatalogGrid';
import {getCatalogByKind} from '@/lib/catalog';

export const metadata={title:'Courses & Training | Datalog ICT',description:'Practical data analysis, research methodology and business intelligence courses with Datalog ICT.'};

export default function CoursesPage(){return <main><section className="hub-hero"><div className="container"><span className="eyebrow">Datalog Learning</span><h1>Build skills you can use immediately.</h1><p>Structured courses combine simple explanations, guided practice, realistic datasets and completion certificates.</p></div></section><section className="section"><div className="container"><CatalogGrid items={getCatalogByKind('course')} action="Enrol now"/></div></section></main>}
