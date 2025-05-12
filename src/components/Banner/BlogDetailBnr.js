import React from "react";
import Link from "next/link";



function BlogDetailBnr({ detail, detailBanner}) {
  return (
    <section className="blogs-detail-bnr">
      <div className="detail-layer">
        <img alt="Layer 1" src={detailBanner.layerfirst} />
         <img alt="Layer 1" src={detailBanner.layersecond} />
      </div>
      <div className="container">
        <div className="grid grid-cols-2 gap">
          <div className="item">
            <div className="blogs-detail-left">
              <Link href={`${detail.Slug}`} className="custom-badge">
                {detail.badge}
              </Link>
              <h1 className="bnr-title">{detail.Title}</h1>

              <div className="bnr-paragraph">
                {detail.Content?.map((block, idx) => (
                  <p key={idx}>{block.children?.[0]?.text}</p>
                ))}
              </div>
              <ul className="custom-flex">
                <li>
                  <a href="/blog">
                    <img alt="Date icon" src="/images/circle-bnr.png" />
                    <span
                      dangerouslySetInnerHTML={{ __html: detail.author }}
                    />
                  </a>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${new Date(detail.Date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })} `,
                    }}
                  />

                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="blogs-detail-right">
              <img alt="Featured" src={`${process.env.NEXT_PUBLIC_API_URL}${detail.Image?.url || ""}`} />
              <p>{detailBanner.imgpara}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailBnr;
