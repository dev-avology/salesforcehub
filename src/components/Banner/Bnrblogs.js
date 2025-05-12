import React from "react";
import Link from "next/link";


function Bnrblogs({ posts }) {
  return (
    <>
      <section className="second-bnr">
        <div className="blogs-bnr-layer">
          <img src="/images/blogs-bnr-layer.png" alt="bnr-img" className="blogs-bnr-layer-desktop" />
        </div>

        <div className="container">
          <div className="grid">
            <div className="blogs-heding">
              <h1>Our Blog</h1>
            </div>
          </div>
          {posts.filter((blogs)=>blogs.isFeatured === true).map((blogs) => (
            <div className="grid grid-cols-2 gap" key={blogs.documentId}>
              <div className="item">
                <div className="blogs-bnr-img">
                <img src={`${process.env.NEXT_PUBLIC_API_URL}${blogs.Image?.url}`} alt={blogs.Title} />
                  <img src="/images/blogs-bnr-layer.png" alt="bnr-img" className="blogs-bnr-layer-mobile" />
                </div>
              </div>

              <div className="item">
                <div className="blogs-bnr-text">
                  <Link href="#" className="custom-badge">Featured Post</Link>
                  <Link href={`/blogs/${blogs.Slug}`}>
                    <h2>{blogs.Title}</h2>
                  </Link>
                  <ul className="custom-flex">
                    <li>
                      <Link href="">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}${blogs.author_logo?.url}`} alt="Date icon" />
                        <span>{blogs.author}</span>
                      </Link>
                      <span>{new Date(blogs.Date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>

                    </li>
                  </ul>
                  <div>
                    {blogs.Content?.map((block, idx) => (
                      <p key={idx}>{block.children?.[0]?.text}</p>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Bnrblogs;
