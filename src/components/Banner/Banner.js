import React from 'react'

function Banner(props) {
  return (
    <>
      <section className="site-banner">
        <div class="layers">
         <img src={props.heroLayer} alt="hero-layer" />
         <img src={props.heroLayerphone} alt="hero-layer" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <h1>
              {props.heading} <span> {props.colorHeading}</span>
              </h1>
              <p>
              {props.para}
               </p>
               <a href="" className="primary-btn">{props.btn}</a>
            </div>
            <div className="item">
                <div className="img-bar">
                 <img src={props.heroImg} alt="bnr-img" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
