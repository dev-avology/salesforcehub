import React from "react";
import Link from 'next/link';

const detail = {
title: "Intro to the Salesforce Integration Decision Making Framework",
description:
"Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. In the next post, we’ll explore how to gather integration requirements so you’re not firing in the dark.",
author: "Jay Prasad",
date: "March 24, 2025",
image: "/images/agent.png",
layerfirst: "/images/layer1.png",
layersecond: "/images/layer2.png",
slug: "intro-to-salesforce-integration-decision-making-framework" // Unique identifier for the post
};

function BlogDetailBnr() {
  return (
    <>
      <section className="blogs-detail-bnr">
        <div className="detail-layer">
          <img alt="Featured" src={detail.layerfirst} />
          <img alt="Featured" src={detail.layersecond} />
        </div>
        <div className="container">
          <div className="grid">
            <div className="grid grid-cols-2 gap">
              <div className="item">
                <div className="blogs-detail-left">
                  <Link href={`/blog/${detail.slug}`} className="custom-badge">
                  Featured Post
                  </Link>
                  <h1 className="bnr-title">{detail.title}</h1>
                  <p className="bnr-paragraph">{detail.description}</p>
                  <ul className="custom-flex">
                    <li>
                      <a href="/blog">
                        <img alt="Date icon" src="/images/circle-bnr.png" />
                        <span>{detail.author}</span>
                      </a>
                      <span>{detail.date}</span>
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
    </>
  );
}

export default BlogDetailBnr;
