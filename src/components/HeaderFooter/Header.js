'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: '/', label: '' },
    { href: '/blog', label: 'Our Blog' },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="grid">
            <div className="logos">
              <Link href="/">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <nav className="link-bar">
              <ul>
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${pathname === href ? 'active' : ''}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className="header-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Join the Community
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Simple Modal Example */}
      {isModalOpen && (
        <div className="custom-model">
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Join the Community</h2>
            <p>Here you can add a form or signup information.</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
           </div>
         </div>
        </div>

      )}
    </>
  );
}

export default Header;
