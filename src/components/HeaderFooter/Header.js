"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "" },
    { href: "/blog", label: "Our Blog" },
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
                      className={`${pathname === href ? "active" : ""}`}
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
            <div className="model-bg">
              <img src='images/model-bg1.png' alt='model-bg'/>
              <img src='images/model-bg2.png' alt='model-bg'/>
            </div>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="subscribe-modal">
                <h2>Join the newsletter & stay up to date!</h2>
                <p>
                  Stay connected and informed! Join our newsletter to receive
                  the latest updates, exclusive offers, and exciting news
                  straight to your inbox
                </p>
                <form className="subscribe-form">
                  <input type="text" placeholder="Full name" required />
                  <input type="email" placeholder="Email address" required />
                  <button type="submit" className="primary-btn">Subscribe Now</button>
                </form>
                <p className="privacy-note">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="cancil-btn">
                <img src='images/cross.svg' alt='cross.svg'/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
