import React from 'react';
import Link from 'next/link';

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
