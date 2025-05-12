import React from "react";
import Link from "next/link";
import MixedMarkdownRenderer from "../MixedMarkdownRenderer";

const posts = [
  {
    image: "/images/oil2.png",
    title: "SF Arch Interview scenario at Amazon Seattle",
    readTime: "7 min read",
    url: "/blog/amazon-seattle-arch-interview",
  },
  {
    image: "/images/oil.png",
    title: "Intro to the Salesforce Integration Decision Making Framework",
    readTime: "4 min read",
    url: "/blog/salesforce-integration-framework",
  },
];

const shareLinks = [
  {
    icon: "images/share1.svg",
    url: "https://www.facebook.com/sharer/sharer.php?u=yourpage.com",
  },
  {
    icon: "images/share3.svg",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=yourpage.com",
  },
  {
    icon: "images/share2.svg",
    url: "https://twitter.com/intent/tweet?url=yourpage.com",
  },
  {
    icon: "images/share4.svg",
    url: "mailto:?subject=Check this out&body=yourpage.com",
  },
];




function Content({ detail }) {
  return (
    <>
      <section className="details-contents">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="items">
              <div>
                {detail.MainContent ? (
                  <MixedMarkdownRenderer content={detail.MainContent} />
                ) : (<p>No Content</p>)}

              </div>
              {/* <div className="content">
                <p>
                  In any enterprise, Salesforce rarely stands alone – it must
                  connect with a web of other systems to deliver a unified
                  customer experience. Yet integrating systems is hard: data
                  silos, inconsistent records, slow updates, and security gaps
                  can derail even the best project.
                </p>
                <figure>
                  <img src="images/Backgr.png" alt="Backgr.png" />
                </figure>
                <p>
                  A structured
                  <strong>Integration Decision Making Framework</strong>
                  helps architects avoid these pitfalls. Instead of building
                  one-off connections ad hoc which often creates a fragile web,
                  the framework provides a<strong> systematic way </strong> to
                  evaluate integration options. It ensures key factors are
                  considered up front. In essence, the framework centers on key
                  considerations and prompts questions like
                  <strong>
                    Data or process integration? Real-time or batch?
                  </strong>
                  This way, you choose an approach based on reasoning, not
                  guesswork.
                </p>
                <p className="spaces">
                  That’s why I’ve created an
                  <strong> eight-part series </strong>on the Salesforce
                  Integration Decision Making Framework. Think of it as your map
                  and compass in the wilderness of data flows, APIs, security
                  considerations, and real-world constraints.
                </p>
                <h2>Table of contents</h2>
                <div className="toc">
                  <ul>
                    <li>
                      <a href="#">What to Expect in This 8-Part Series</a>
                    </li>
                    <li>
                      <a href="#">
                        The Integration Decision Making Framework: A Quick
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="#">The Integration Path</a>
                    </li>
                    <li>
                      <a href="#">
                        Example: Retail Loyalty Program Integration
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>What to Expect in This 8-Part Series</h2>
                <div className="intro-text">
                  <div className="intro-text-repeat">
                    <h3>1. Intro to the Framework</h3>
                    <p>
                      Discover why integration is essential and get a sneak peek
                      into the overall roadmap and key factors driving modern
                      integration initiatives.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>2. Gathering Integration Requirements</h3>
                    <p>
                      Learn how to identify what needs to be connected.
                      Understand the nuances of integrating different data types
                      and processes, and determine the volume and frequency of
                      required interactions.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>3. Real-Time vs. Batch Processing</h3>
                    <p>
                      Explore the decision-making process behind streaming data
                      immediately versus collecting it over a set period.
                      Understand when each approach best suits your project’s
                      needs.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>4. Synchronous vs. Asynchronous Processing</h3>
                    <p>
                      Delve into the differences between immediate, blocking
                      communications and background processing. Find out how
                      choosing the right approach can impact system efficiency
                      and user experience.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>5. Integration Patterns &amp; Architecture Styles</h3>
                    <p>
                      Get acquainted with various integration patterns such as
                      publish/subscribe, point-to-point, and event-driven
                      architectures. This section helps you understand which
                      style suits different scenarios.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>6. Salesforce Integration Capabilities</h3>
                    <p>
                      Examine the integration features within Salesforce,
                      including REST/SOAP APIs, Platform Events, and External
                      Objects, to determine how best to leverage these tools for
                      seamless connectivity.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>7. Choosing Tools &amp; Platforms</h3>
                    <p>
                      Navigate through options like ESBs, iPaaS, and ETL
                      solutions. Learn about the trade-offs between cost,
                      capability, and ease-of-use to make informed decisions for
                      your integration projects.
                    </p>
                  </div>
                  <div className="intro-text-repeat">
                    <h3>8. Data Quality, Security &amp; Governance</h3>
                    <p>
                      Understand the critical components of data management
                      within integrations. Learn how to ensure that the data
                      remains consistent, secure, and compliant throughout the
                      entire process.
                    </p>
                  </div>
                </div>
                <h2>
                  The Integration Decision Making Framework: A Quick Overview
                </h2>
                <p>
                  Picture your architecture as a city of systems: Salesforce
                  might be your town square, an ERP the business district, and
                  third-party apps the local shops. The roads (integrations)
                  connecting them must handle high traffic safely, reliably, and
                  quickly.
                </p>
                <figure>
                  <img className="spaces" src="images/detail22.png" alt="" />
                </figure>
                <ul>
                  <h4>At its core, the framework answers questions like:</h4>
                  <li>Which data belongs in Salesforce vs. stays outside?</li>
                  <li>Do we integrate in real-time or batched intervals?</li>
                  <li>
                    Is the communication synchronous (pause for a reply) or
                    asynchronous (fire and forget)?
                  </li>
                  <li>What about security, scaling, and compliance?</li>
                  <p>
                    The best part? You don’t have to guess. By following these
                    structured steps, you’ll avoid massive rework later.
                  </p>
                </ul>
                <h2>The Integration Path</h2>
                <figure>
                  <img src="images/Background4.png" alt="" />
                </figure>
                <figure>
                  <img src="images/Background5.png" alt="" />
                </figure>
                <h2>Example: Retail Loyalty Program Integration</h2>
                <p>
                  Consider a company integrating a retail loyalty program system
                  with Salesforce. Salesforce is used for customer service,
                  while a separate loyalty application manages the program’s
                  data. Using the framework, you can decide the followings:
                </p>
                <ul className="spaces">
                  <li>
                    Integration approach: Don’t replicate the entire loyalty
                    database into Salesforce. Instead, Salesforce will fetch
                    loyalty point balances on demand from the external loyalty
                    system.
                  </li>
                  <li>
                    Communication style: When a purchase triggers points to be
                    added, Salesforce sends an asynchronous request to the
                    loyalty system so checkout isn’t slowed; when a service
                    agent needs to check a customer’s points in Salesforce, a
                    synchronous call fetches the latest value immediately. This
                    way, transactions stay quick while agents get real-time info
                    when they need it.
                  </li>
                  <li>
                    Source of truth: The loyalty system remains the system of
                    record for loyalty data. Salesforce displays it but never
                    overwrites it. Any point adjustments initiated in Salesforce
                    are performed via the loyalty system’s API, and all data
                    transfers use HTTPS and OAuth for security.
                  </li>
                </ul>
                <p>
                  This example shows the framework in action – guiding what data
                  to replicate (very little), how to handle timing (real-time
                  vs. batch), how to communicate (async vs. sync), and who owns
                  the data (loyalty system as SOR). The result is that users get
                  up-to-date loyalty info without unnecessary complexity or
                  risk.
                </p>
              </div> */}
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
                        class="card-img"
                      ></img>
                    </div>
                    <h3>Just For You</h3>
                    {posts.map((postright, index) => (
                      <div className="box" key={index}>
                        <img
                          src={postright.image}
                          alt="Guide"
                          className="card-img"
                        />
                        <h4>
                          <Link href={postright.url}>{postright.title}</Link>
                        </h4>
                        <span>{postright.readTime}</span>
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
