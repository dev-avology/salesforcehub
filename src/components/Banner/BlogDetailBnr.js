import React from "react";
import Link from "next/link";
const shareLinks = [
  {
    icon: "../images/share1.svg",
    url: "https://www.facebook.com/sharer/sharer.php?u=yourpage.com",
  },
  {
    icon: "../images/share3.svg",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=yourpage.com",
  },
  {
    icon: "../images/share2.svg",
    url: "https://twitter.com/intent/tweet?url=yourpage.com",
  },
  {
    icon: "../images/share4.svg",
    url: "mailto:?subject=Check this out&body=yourpage.com",
  },
];

function BlogDetailBnr({ detail, detailBanner }) {
  
  return (
    <section className="blogs-detail-bnr">
      <div className="detail-layer">
        <img alt="Layer 1" src={detailBanner.layerfirst} />
        <img alt="Layer 1" src={detailBanner.layersecond} />
        <img alt="Layer 1" src={detailBanner.layerthree} />
      </div>
      <div className="container">
        <div className="grid grid-cols-2 gap">
          <div className="item">
            <div className="blogs-detail-left">

              <Link href={`${detail.Slug}`} className="custom-badge">
                {detail.badge}
              </Link>
              <h1 className="bnr-title">{detail.Title}</h1>
              <img alt="Featured" src={`${process.env.NEXT_PUBLIC_API_URL}${detail.Image?.url || ""}`}  className="mobile"/>
              <p className="mobile">{detailBanner.imgpara}</p>

              <div>
                {detail.Content?.map((block, idx) => (
                  <p key={idx} className="bnr-paragraph">{block.children?.[0]?.text}</p>
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
                         <div className="blogs-detail-sidebar">
                <div className="icons">
                    <ul>
                      {shareLinks.map((share, index) => (
                        <li key={index}>
                          <Link href={share.url} target="_blank">
                            <img
                              alt={`Share icon ${index + 1}`}
                              src={share.icon}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
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
