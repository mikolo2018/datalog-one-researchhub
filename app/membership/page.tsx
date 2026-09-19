import CatalogGrid from '@/components/CatalogGrid';
import {getCatalogByKind} from '@/lib/catalog';

export const metadata={title:'Premium Membership | Datalog ICT',description:'Join the Datalog Research Club for tools, templates, research clinics and member discounts.'};

export default function MembershipPage(){return <main><section className="commerce-hero"><div className="container"><span className="eyebrow light">Datalog Research Club</span><h1>Ongoing support for ongoing research.</h1><p>Choose a monthly membership for premium tools, resource access, clinics and discounted professional services.</p></div></section><section className="section"><div className="container"><CatalogGrid items={getCatalogByKind('membership')} action="Choose plan"/><p className="fine-print">Membership access begins after confirmed payment. Recurring billing is activated when the selected Paystack subscription plan is configured.</p></div></section></main>}
