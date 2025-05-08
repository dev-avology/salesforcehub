import React from 'react';
import Link from 'next/link';

function CommonBnr({ heading, description, buttonText, buttonLink, imageSrc, imageSrclayer, imageSrclayer2 }) {
  return (
    <section className="join-bottom-bnr">
      <div className="join-bottom-bnr-layer">
        <img src={imageSrclayer} alt="join banner" />
        <img src={imageSrclayer2} alt="join banner" />
      </div>
      <div className="container">
        <div className="grid">
          <div className="item">
            <h3>{heading}</h3>
            <p>{description}</p>
            <a href={buttonLink} className="primary-btn">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonBnr;
