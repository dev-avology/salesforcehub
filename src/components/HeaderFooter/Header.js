import React from 'react'
import Link from 'next/link';
import './nav.css';

function Header() {
  return (
    <>
<section className="header">
  <div className="container">
    <div className="grid">
      <div className="logos">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="link-bar">
         <ul>
          <li>
            <Link href="/"></Link> 
          </li>
          <li>
            <Link href="/">Blog</Link> 
          </li>
          <li>
            <Link className="header-btn" href="/">Join the Community</Link> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Header
