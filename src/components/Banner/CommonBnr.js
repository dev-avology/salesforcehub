import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';
import Login from '../Login';

function CommonBnr({
  heading,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageSrclayer,
  imageSrclayer2,
  className = '',
  ...props
}) {

  const [showlogin, setShowlogin] = useState(false);
  const { isAuthenticated } = useAuthContext();
  return (
    <section className={`join-bottom-bnr ${className}`} {...props}>
      <div className="join-bottom-bnr-layer">
        <img src={imageSrclayer} alt="layer 1" />
        <img src={imageSrclayer2} alt="layer 2" />
      </div>
      <div className="container">
        <div className="grid">
          <div className="item">
            <h3>{heading}</h3>
            <p>{description}</p>
            {!isAuthenticated && (
              showlogin ? (
                <Login />
              ) : (
                <button className="primary-btn"  onClick={()=>setShowlogin(true)}>{buttonText}</button>
              )
            )}


          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonBnr;
