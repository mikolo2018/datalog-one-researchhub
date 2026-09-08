import Link from 'next/link'

export default function Nav(){
  return <header className="nav"><div className="container nav-inner"><Link href="/" className="brand"><span className="brand-mark">D</span><span className="brand-copy"><strong>DATALOG</strong><small>ICT & GENERAL MERCHANDISE LTD.</small></span></Link><div className="links"><Link href="/#services">Services</Link><Link href="/research-hub">Research Hub</Link><Link href="/#training">Training</Link><Link href="/#about">About</Link><Link href="/dashboard">Dashboard</Link><Link href="/login">Sign in</Link><Link className="btn dark" href="/consultation">Book Expert</Link></div></div></header>
}