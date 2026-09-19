import CatalogGrid from '@/components/CatalogGrid';
import {getCatalogByKind} from '@/lib/catalog';

export const metadata={title:'Digital Research Shop | Datalog ICT',description:'Purchase practical research templates, workbooks and academic presentation resources.'};

export default function ShopPage(){return <main><section className="hub-hero"><div className="container"><span className="eyebrow">Digital Research Shop</span><h1>Practical resources that save time.</h1><p>Editable templates and structured guides developed around real research workflows. Purchases are recorded in your Datalog account for secure fulfilment.</p></div></section><section className="section"><div className="container"><CatalogGrid items={getCatalogByKind('digital_product')}/></div></section><section className="section alt"><div className="container trust-strip"><strong>Responsible academic support</strong><span>Resources guide your own work and should be adapted to your institution, discipline and supervisor requirements.</span></div></section></main>}
