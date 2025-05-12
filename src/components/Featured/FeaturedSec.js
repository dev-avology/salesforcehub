import React from "react";


function FeaturedSec({ heading = "Featured Voices", headingImage = "/images/message.svg", teamMembers }) {
  return (
    <>
 <section className="feature-sec">
      <div className="container">
        <div className="heading">
          <h6>
            <span>
              <img src={headingImage} alt="icon" className="card-img" />
              {heading}
            </span>
          </h6>
        </div>
        <div className="grid grid-cols-3 gap">
          {teamMembers.map((member, index) => (
            <div key={index} className="items">
              <div className="feature-card">
                <figure>
                  <img src={member.image} alt={member.name} className="card-img" />
                </figure>
                <div className="content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}

export default FeaturedSec;
