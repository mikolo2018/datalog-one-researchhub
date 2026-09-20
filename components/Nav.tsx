import Link from 'next/link'
import Image from 'next/image'

export default function Nav(){
  const links=[['Services','/#services'],['Schools','/schools'],['Research Hub','/research-hub'],['Marketplace','/marketplace'],['Articles','/blog'],['About','/#about'],['Dashboard','/dashboard'],['Sign in','/login']];
  return <header className="nav"><div className="container nav-inner"><Link href="/" className="brand" aria-label="Datalog ICT home"><Image src="/datalog-logo.png" alt="" width={52} height={52} className="brand-mark" priority/><span className="brand-copy"><strong>DATALOG</strong><small>ICT & GENERAL MERCHANDISE LTD.</small></span></Link><nav className="links" aria-label="Main navigation">{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}<Link className="btn dark" href="/services/order">Start a Project</Link></nav><details className="mobile-menu"><summary aria-label="Open navigation menu">Menu</summary><nav aria-label="Mobile navigation">{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}<Link className="btn dark" href="/services/order">Start a Project</Link></nav></details></div></header>
}
