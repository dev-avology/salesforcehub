"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import API from '../../services/api'
import NewsletterModal from "../NewsLetter/NewsletterModal";
import ConfirmModal from '../NewsLetter/confirmModel';

function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
   const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmMsg, setConfirmMsg] = useState("");
    const [confirmType, setConfirmType] = useState("info");

  const handleUserData = async (e) => {
    e.preventDefault();

    try {
      const existingSubscribers = await API.get('/api/subscribers');
      const subscribers = existingSubscribers?.data?.data;

      const emailExists = subscribers.some(
        (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
      );

      if (emailExists) {
       setConfirmMsg("This email is already subscribed.");
        setConfirmType("error");
        setConfirmOpen(true);
        setEmail('');
       setName('');
        return;
      }

      await API.post('/api/subscribers', {
        data: {
          name,
          email,
        },
      });
      setIsModalOpen(false);
      setConfirmMsg("Thanks, you're subscribed!");
      setConfirmType("success");
      setConfirmOpen(true);
      setIsModalOpen(false);
      setEmail('');
      setName('');
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

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
                  <NewsletterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                handleUserData={handleUserData}
              />
               <ConfirmModal
                      isOpen={confirmOpen}
                      onClose={() => setConfirmOpen(false)}
                      message={confirmMsg}
                      type={confirmType}
                    />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Simple Modal Example */}
     
    </>
  );
}

export default Header;
