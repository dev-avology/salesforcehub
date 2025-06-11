import React from "react";
import Link from "next/link";
import MixedMarkdownRenderer from "../MixedMarkdownRenderer";

const posts = [
  {
    image: "../images/oil2.png",
    title: "SF Arch Interview scenario at Amazon Seattle",
    readTime: "7 min read",
    url: "/blog/amazon-seattle-arch-interview",
  },
  {
    image: "../images/oil.png",
    title: "Intro to the Salesforce Integration Decision Making Framework",
    readTime: "4 min read",
    url: "/blog/salesforce-integration-framework",
  },
];

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




function Content({ detail, blogs }) {
  return (
    <>
      <section className="details-contents">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="items">
              <div className="content">
                {detail.MainContent ? (
                  <MixedMarkdownRenderer content={detail.MainContent} />
                ) : (<p>No Content</p>)}

              </div>

            </div>
            <div className="item">
              <div className="blogs-detail-sidebar">
                <div className="blogs-detail-sticky">
                  <div className="icons">
                    <h3>Share article</h3>
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
                  <div className="details-article">
                    <div className="details-article-bg">
                      <img
                        src="../images/sticky-bg.png"
                        alt="Guide"
                        className="card-img"
                      ></img>
                    </div>
                    <h3>Just For You</h3>
                    {blogs.slice(0,2).map((postright) => (
                      <div className="box" key={postright.documentId}>
                        <img className="card-img" alt="Guide" src={`${process.env.NEXT_PUBLIC_API_URL}${postright.Image?.url || ""}`} />
                        <Link className="title-custom" href={`/blog/${postright.Slug}`}>
                          <h4>{postright.Title}</h4>
                        </Link>
                        
                        {/* <span>{postright.readTime}</span> */}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="icons">
                  <h3>Share article</h3>
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
        </div>
      </section>
    </>
  );
}

export default Content;
