import React from "react";
import Link from "next/link";


function Bnrblogs(props) {
  return (
    <>
   <section className="second-bnr">
      <div className="blogs-bnr-layer">
        <img src={props.layer} alt="bnr-img" />
      </div>

      <div className="container">
        <div className="grid">
          <div className="blogs-heding">
            <h1>{props.heading}</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap">
          <div className="item">
            <div className="blogs-bnr-img">
              <img src={props.image} alt="Featured"/>
            </div>
          </div>

          <div className="item">
            <div className="blogs-bnr-text">
              <Link href="#" className="custom-badge">Featured Post</Link>
              <h2>{props.title}</h2>
              <ul className="custom-flex">
                <li>
                  <Link href="">
                    <img src="/images/circle-bnr.png" alt="Date icon" />
                    <span>Jay Prasad</span> 
                  </Link>
                  <span>{props.date}</span>
                </li>
              </ul>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Bnrblogs;
