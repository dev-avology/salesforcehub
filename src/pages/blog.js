import Bnrblogs from "@/components/Banner/Bnrblogs";
import CommonBnr from "@/components/Banner/CommonBnr";
import CommonCard from "@/components/Cards/CommonCard";
import CommonDrop from "@/components/Dropdown/CommonDrop";
import FeaturedSec from "@/components/Featured/FeaturedSec";
import Tabs from "@/components/Tabs/Tabs";
import React from "react";


const blogPosts = [
  {
    image: "/images/step.png",
    badge: "Trending Post",
    title: "SF Arch Interview scenario at Amazon Seattle",
    author: "Jay Prasad",
    date: "March 24, 2025",
    description:
      "In this blog post, I share a real-life Salesforce Architect interview scenario from Amazon. The use case centers on a restaurant order management...",
  },
  {
    image: "/images/step.png",
    badge: "Trending Post",
    title: "SF Arch Interview scenario at Amazon Seattle",
    author: "Jay Prasad",
    date: "March 24, 2025",
    description:
      "In this blog post, I share a real-life Salesforce Architect interview scenario from Amazon. The use case centers on a restaurant order management...",
  },
  {
    image: "/images/step.png",
    badge: "Trending Post",
    title: "SF Arch Interview scenario at Amazon Seattle",
    author: "Jay Prasad",
    date: "March 24, 2025",
    description:
      "In this blog post, I share a real-life Salesforce Architect interview scenario from Amazon. The use case centers on a restaurant order management...",
  },
];

const imageUrl = "/images/hange.png";

const categories = [
  { value: "data", label: "Data Arch" },
  { value: "integration", label: "Integration" },
  { value: "devops", label: "DevOps" },
  { value: "governance", label: "Governance" },
];

const tabData = [
  {
    label: "All",
    value: "1",
    content: [
      {
        title:
          "Gathering integration requirements for enterprise-wide salesforce implementations",
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Trending Post",
        badgeColor: "",
        description:
          "This is second blog in series of 8 blog focussing on gathering Salesforce integration requirements. The blog will focus on enterprise-wide integration where Salesforce is the primary system but interacts with other core systems.",
        image: "/images/oil.png",
        link: "/blog#",
      },

      {
        title: (
          <>
            SF Arch Interview scenario at <span>Amazon Seattle</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Governance",
        badgeColor: "blue",
        description: `In this blog post, I share a real-life Salesforce Architect interview scenario from Amazon. The use case centers on a restaurant order management system, where status updates arrive in incremental form (e.g., “Burger Ready”) rath...`,
        image: "/images/oil2.png",
        link: "/blog#",
      },
      {
        title: (
          <>
            Intro to the Salesforce Integration{" "}
            <span>Decision Making Framework</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Data Arch",
        badgeColor: "green",
        description: `Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids ...
`,
        image: "/images/oil3.png",
        link: "/blog#",
      },
      {
        title: (
          <>
            Intro to the Salesforce Integration{" "}
            <span>Decision Making Framework</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Data Arch",
        badgeColor: "green",
        description: `Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids ...
`,
        image: "/images/oil3.png",
        link: "/blog#",
      },
      {
        title: (
          <>
            Intro to the Salesforce Integration{" "}
            <span>Decision Making Framework</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Data Arch",
        badgeColor: "green",
        description: `Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids ...
`,
        image: "/images/oil3.png",
        link: "/blog#",
      },
      {
        title: (
          <>
            Intro to the Salesforce Integration{" "}
            <span>Decision Making Framework</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Data Arch",
        badgeColor: "green",
        description: `Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids ...
`,
        image: "/images/oil3.png",
        link: "/blog#",
      },
      {
        title: (
          <>
            Intro to the Salesforce Integration{" "}
            <span>Decision Making Framework</span>
          </>
        ),
        author: "Jay Prasad",
        date: "March 24, 2025",
        badgeText: "Data Arch",
        badgeColor: "green",
        description: `Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids ...
`,
        image: "/images/oil3.png",
        link: "/blog#",
      },
    ],
  },
  {
    label: "Data Arch",
    value: "2",
    content: [
      {
        title: "Data Arch Best Practices",
        author: "Jay Prasad",
        date: "March 25, 2025",
        badgeText: "Governance",
        badgeColor: "blue",
        description:
          "Learn how to design enterprise data architecture effectively.",
        image: "/images/step.png",
        link: "/blog#",
      },
    ],
  },
  {
    label: "Integration",
    value: "3",
    content: [
      {
        title: "Salesforce Integration Guide",
        author: "Jay Prasad",
        date: "March 26, 2025",
        badgeText: "Trending Post",
        badgeColor: "green",
        description:
          "Deep dive into Salesforce integration with third-party platforms.",
        image: "/images/step.png",
        link: "/blog#",
      },
    ],
  },
  {
    label: "DevOps",
    value: "4",
    content: [
      {
        title: "Salesforce Integration Guide",
        author: "Jay Prasad",
        date: "March 26, 2025",
        badgeText: "Trending Post",
        badgeColor: "green",
        description:
          "Deep dive into Salesforce integration with third-party platforms.",
        image: "/images/step.png",
        link: "/blog#",
      },
    ],
  },
  {
    label: "Governance",
    value: "5",
    content: [
      {
        title: "Salesforce Integration Guide",
        author: "Jay Prasad",
        date: "March 26, 2025",
        badgeText: "Trending Post",
        badgeColor: "green",
        description:
          "Deep dive into Salesforce integration with third-party platforms.",
        image: "/images/step.png",
        link: "/blog#",
      },
    ],
  },
];

const someTeamData = [
  {
    name: "Aisha Rahman",
    role: "Product Manager",
    image: "/images/tony1.svg",
  },
  {
    name: "Daniel Lee",
    role: "UX Designer",
    image: "/images/tony2.svg",
  },
  {
    name: "Carlos Mendes",
    role: "Frontend Developer",
    image: "/images/tony3.svg",
  },
];


const joinData = {
  heading: "A Community Built for Learning & Fun",
  description: `Stay connected and informed! Join our newsletter to receive the latest updates, exclusive offers, and exciting news straight to your inbox`,
  buttonText: "Sign up now",
  buttonLink: "#", // You can change this to the actual link
  imageSrclayer2:"/images/most1.png",
  imageSrclayer:"/images/most2.png",
};



function blog() {

  return (
    <>
      <Bnrblogs
        heading="Our Blog"
        title="Gathering integration requirements for enterprise-wide Salesforce implementation"
        date="March 24, 2025"
        description="This is the second blog in a series of 8 blogs focusing on gathering Salesforce integration requirements. The blog will focus on enterprise-wide integration where Salesforce is the primary system but interacts with other core systems."
        image="/images/agent.png"
        layer="/images/blogs-bnr-layer.png"
        layermobile="/images/blogs-bnr-layer.png"
      />
      <CommonCard blogPosts={blogPosts} />
      {/* blogs-animation-img */}
      <section className="blogs-animation-img">
        <img src={imageUrl} alt="text" className="card-img" />
      </section>
      {/* blogs-animation-img end*/}

      {/* common-tabs */}
      <section className="common-tabs">
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="tabs-bar">
                <Tabs tabs={tabData} />

              </div>
              <div class="pagination">
              <span class="arrow disabled">
             <img src="images/icon-arrow.svg fill.png" alt="Guide" class="card-img"></img> Previous
            </span>
              <div className="pagination-center">
                <span class="current">1</span>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <span>…</span>
                <a href="#">57</a>
                </div>
                <a class="arrow" href="#">
                  Next   <img src="images/icon-arrow.svg fill.svg" alt="Guide" class="card-img"></img>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="join-card">
                <figure>
                  <img
                    src="images/join-conatineer.png"
                    alt="text"
                    className="card-img"
                  />
                </figure>
                <article>
                  <h3>
                    Join the <span>newsletter & stay</span> up to date!
                  </h3>
                  <a href="" class="primary-btn">
                    Subscribe
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* common-tabs end */}

      <FeaturedSec
      heading="Featured Voices"
      headingImage="/images/message.svg"
      teamMembers={someTeamData}
    />
    <CommonBnr {...joinData}/>
    <CommonDrop/>
    </>
  );
}

export default blog;
