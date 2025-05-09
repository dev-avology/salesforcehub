import React from "react";
import Link from "next/link";

function BlogDetailBnr({ detail }) {
  return (
    <section className="blogs-detail-bnr">
      <div className="detail-layer">
        <img alt="Layer 1" src={detail.layerfirst} />
      </div>
      <div className="container">
        <div className="grid">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="blogs-detail-left">
                <Link href={`/blog/${detail.slug}`} className="custom-badge">
                  {detail.badge}
                </Link>
                <h1 className="bnr-title">{detail.title}</h1>
                <p className="bnr-paragraph">{detail.description}</p>
                <ul className="custom-flex">
                  <li>
                    <a href="/blog">
                      <img alt="Date icon" src="/images/circle-bnr.png" />
                      <span
                        dangerouslySetInnerHTML={{ __html: detail.author }}
                      />
                    </a>
                   <span dangerouslySetInnerHTML={{ __html: detail.date }} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="blogs-detail-right">
                <img alt="Featured" src={detail.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailBnr;
