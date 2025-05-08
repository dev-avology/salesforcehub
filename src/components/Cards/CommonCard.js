import React from "react";

function CommonCard({ blogPosts }) {
  return (
    <>
      <section className="common-card">
        <div className="container">
          <div className="grid grid-cols-3 gap">
            {blogPosts.map((post, index) => (
              <div className="card" key={index}>
                <figure>
                  <img
                    src={post.image}
                    alt="Guide Image"
                    className="card-img"
                  />
                </figure>
                <div className="card-content">
                  <a className="custom-badge" href="/blog#">
                    {post.badge}
                  </a>
                  <h3 className="title-custom">{post.title}</h3>
                  <ul className="custom-flex">
                    <li>
                      <a href="/blog">
                        <img src="/images/circle-bnr.png" alt="Date icon" />
                        <span>{post.author}</span>
                      </a>
                      <span>{post.date}</span>
                    </li>
                  </ul>
                  <p>{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CommonCard;
