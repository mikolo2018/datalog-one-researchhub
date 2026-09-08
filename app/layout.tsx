import './globals.css';
import Nav from '@/components/Nav';

export const metadata={title:'Datalog ICT — Research, Data Analytics & Digital Solutions',description:'Datalog ICT & General Merchandise Ltd: research support, data analysis, ICT training, research tools and consultancy in Nigeria.'};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<footer className="footer"><div className="container footer-inner"><strong>Datalog ICT & General Merchandise Ltd.</strong><span>Data | Insight | Solutions | Success</span><span>Abeokuta, Ogun State • +234 816 641 4241</span></div></footer></body></html>}