import React from "react";
import Link from "next/link";
  
function CommonCard({ posts }) {
  return (
    <>
      <section className="common-card">
        <div className="container">
          <div className="grid grid-cols-3 gap">
            {posts
              .filter((post) => post.badge === "Trending Post")
              .slice(0, 3)
              .map((post) => (
                <div className="card" key={post.documentId}>
                  <figure>
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${post.Image?.url || ""}`}
                      alt="Guide Image"
                      className="card-img"
                    />
                  </figure>
                  <div className="card-content">
                    <a className="custom-badge" href="/blog#">
                      {post.badge}
                    </a>
                    <Link  className="title-custom" href={`/blogs/${post.Slug}`}>
                    <h3>{post.Title}</h3>
                  </Link>
                    
                    <ul className="custom-flex">
                      <li>
                        <a href="/blog">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}${post.author_logo?.url}`} alt="Date icon" />
                          <span>{post.author}</span>
                        </a>
                        <span>
                          {new Date(post.Date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </li>
                    </ul>
                    <div>
                      {post.Content?.map((block, idx) => (
                        <p key={idx}>{block.children?.[0]?.text}</p>
                      ))}
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

export default CommonCard;
