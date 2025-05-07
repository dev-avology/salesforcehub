import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import Client from "@/components/Slider/Client";
import Footer from "@/components/HeaderFooter/Footer";

const boxbar = [
  {
    number: "12",
    para: "Questions Answered Today",
  },
  {
    number: "100+",
    para: "Active Members",
  },
  {
    number: "24/7",
    para: "Community Support",
  },
  {
    number: "15+",
    para: "Expert Events Monthly",
  },
];

const joinData = [
  {
    img: "images/join1.png",
    link: "#",
    linkText: "Connect",
    heading: "Vibrant Community",
    paragraphs: [
      "Join an active Slack community with <span>dedicated channels for networking and growth.</span>",
      "Connect with experts, collaborate on best practices, and navigate Salesforce’s evolving landscape together.",
    ],
  },
  {
    img: "images/join2.png",
    link: "#",
    linkText: "Innovate",
    heading: "AI & Automation Updates",
    paragraphs: [
      "Stay ahead <span>of Salesforce’s AI-driven innovations</span> with expert insights on:",
    ],
    list: [
      "<span>Smarter automation -</span> Agentforce & Einstein AI",
      "<span>Real-time data & workflows -</span> Data Cloud",
      "<span>Stronger security & scalability -</span> Hyperforce",
    ],
  },
  {
    img: "images/join3.png",
    link: "#",
    linkText: "Learn",
    heading: "Live AMAs & Office Hours",
    paragraphs: [
      "Get direct access to Salesforce MVPs and experts in <span>weekly Q&A sessions.</span>",
      "Ask questions, discuss new features, and <span>get real-world advice</span> tailored to your needs.",
    ],
  },
];
const upcoming = [
  {
    heading: "Data Cloud Mastery",
    para: "March 15, 2025 - 2:00 PM EST",
    btn: "Save Seat",
  },
  {
    heading: "Flow Automation Workshop",
    para: "March 15, 2025 - 2:00 PM EST",
    btn: "Save Seat",
  },
];
const whyJoinData = {
  heading: "Why Join SalesforceHub?",
  paragraph: `Salesforce is evolving fast—with AI, automation, and data-driven workflows reshaping how we work. Keeping up can be overwhelming, but that’s where SalesforceHub comes in. We break down every Salesforce release, so you always know what’s new, what matters, and how to stay ahead.`,
};
const liveSectionData = {
  heading: "Live Office Hours with Experts",
  paragraphs: [
    `Every month, we bring in <span>Salesforce architects, AI experts, and Salesforce specialists</span> for live Office Hours to discuss real-world challenges and upcoming Salesforce updates.`,
    `Got a tough integration question? Need advice on AI use cases? <span>Ask directly, live.</span>`,
  ],
};

const communityData = {
  heading: "Community Discussions",
  paragraphs: [
    `Get mentorship, resume reviews, and job referrals <span>(#career-growth)</span>, connect with Salesforce professionals worldwide <span>(#networking)</span>,
    and learn from those who’ve passed the toughest exams <span>(#certification-tips)</span>— all in one place.`,
  ],
};

const trendingData = [
  {
    title: "Best ways to automate lead scoring in Salesforce?",
    responses: 23,
    status: "Active now",
  },
  {
    title: "How are you using Agentforce for customer service?",
    responses: 15,
    status: " 2h ago",
  },
  {
    title: "Top strategies for managing leads in Salesforce?",
    responses: 45,
    status: "4h ago",
  },
];

const build = {
  heading: "Build Your Network & Career",
  paragraphs: [
    `Meet <span>Salesforce consultants, AI innovators, hiring managers, and industry leaders </span>in Slack. Whether you're looking for <span> mentorship, job opportunities, or collaboration on projects,</span> SalesforceHub is where professionals connect.`,
  ],
};
const exclusiveData = {
  heading: "Exclusive AI & Salesforce Resources",
  paragraphs: [`Get access to member-only resources that help you stay ahead`],
};

const cardData = [
  {
    imgSrc: "images/sale1.png",
    badge: "Guide",
    title: "Implementation Blueprints",
    description:
      "Step-by-step guides for configuring Data Cloud, Agentforce, Einstein AI, and automation tools.",
  },
  {
    imgSrc: "images/sale2.png",
    badge: "Examples",
    title: "Code Snippets & Best Practices",
    description:
      "Reusable Apex, Flow, and API examples from real-world projects.",
  },
  {
    imgSrc: "images/sale3.png",
    badge: "Guide",
    title: "Design Patterns",
    description: "Integration, data and security architecture design patterns.",
  },
  {
    imgSrc: "images/sale4.png",
    badge: "Demo",
    title: "Release Previews & Action Plans",
    description:
      "Insights on Salesforce’s Spring, Summer, and Winter updates so you know what to test, adopt, and ignore.",
  },
];


const teamData = [
  {
    name: "Alex Martinez",
    role: "Senior Salesforce Admin",
    channel: "Active in #admin-tips",
    image: "/images/alxe1.svg",
    description: `“SalesforceHub's AI insights helped me optimize our sales process in ways I never thought possible.”`,
  },
  {
    name: "Priya Sharma",
    role: "Salesforce Developer",
    channel: "Active in #development",
    image: "/images/alxe2.svg",
    description: `"The code snippets and real-time support from the community are invaluable for complex implementations."`,
  },
  {
    name: "James Wilson",
    role: "Solution Architect",
    channel: "Active in #architecture",
    image: "/images/alxe3.svg",
    description: `"SalesforceHub helped me land my dream job through networking and knowledge sharing."`,
  },
];


export default function Home() {
  return (
    <>
      <Banner
        heading="SalesforceHUB"
        colorHeading="Connect, Learn, Grow"
        para="Join the first AI-powered community for Salesforce professionals. Get instant answers, expert insights, and career growth opportunities."
        btn="Join SalesforceHub Now – It's Free"
        heroLayer="/images/hero-layer.png"
        heroImg="/images/bnr-img.png"
      />
      {/* bootom-bnr */}
      <section className="bootom-bnr">
        <div className="bottom-layer">
          <img src="images/bottom-layer.png" alt="bnr-img" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="slider-type">
                <div className="slider-flex">
                  <div className="slidr-img">
                    <img src="images/professional.png" alt="professional" />
                  </div>
                  <div className="slidr-text">
                    <img src="images/quotation.png" alt="bnr-img" />
                    <p>
                      "The community has been invaluable for staying ahead of
                      Salesforce AI developments. The real-time support is
                      amazing!"
                    </p>
                    <span>
                      <span>Sarah Johnson </span>Salesforce Architect @
                      Microsoft
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="questions">
                {boxbar.map((boxes, index) => (
                  <div className="box" key="{index}">
                    <h3>{boxes.number}</h3>
                    <p>{boxes.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bootom-bnr  end*/}
      {/* join */}
      <section class="join">
        <div class="container">
          <div className="grid">
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{whyJoinData.heading}</h2>
                <p>{whyJoinData.paragraph}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap">
            {joinData.map((item, index) => (
              <div className="item" key={index}>
                <div className="join-box">
                  <div className="join-img">
                    <img src={item.img} alt="professional" />
                  </div>
                  <div className="join-text">
                    <a href={item.link}>{item.linkText}</a>
                    <h3>{item.heading}</h3>
                    {item.paragraphs?.map((para, i) => (
                      <p
                        key={i}
                        className={i === 1 ? "join-secon-para" : undefined}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                    {item.list && (
                      <ul>
                        {item.list.map((li, liIndex) => (
                          <li
                            key={liIndex}
                            dangerouslySetInnerHTML={{ __html: li }}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="join-botton">
            <a href="#" className="primary-btn">
              Join SalesforceHub Today
            </a>
          </div>
        </div>
      </section>

      <section className="join-layer">
        <img src="images/join-layer.png" alt="bnr-img" />
      </section>

      {/* join end*/}
      {/* live */}
      <section class="live">
        <div class="container">
          <div className="grid">
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{liveSectionData.heading}</h2>
                {liveSectionData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="nex-live">
                <div className="next-flex">
                  <p>Next Live Event</p>
                  <span>Only 5 spots left</span>
                </div>
                <h4>Advanced Einstein AI Implementation</h4>
                <p>March 15, 2025 - 2:00 PM EST</p>
                <div className="next-only">
                  <figure>
                    <img src="images/sarah.png" alt="sarah" />
                  </figure>
                  <p>
                    <span>Sarah Johnson </span>
                    <span>Salesforce Architect @ Microsoft</span>
                  </p>
                </div>
                <a href="#" className="primary-btn">
                  Register Now
                </a>
              </div>
              <div className="grid">
                <div className="item">
                  <div className="upcoming">
                    <h3>Upcoming Sessions</h3>

                    {upcoming.map((session, index) => (
                      <div className="upcoming-flex" key={index}>
                        <div className="upcoming-box">
                          <h4>{session.heading}</h4>
                          <p>{session.para}</p>
                        </div>
                        <div className="upcoming-btn">
                          <a href="#" className="primary-btn">
                            {session.btn}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="live-picture">
                <img src="images/picture.png" alt="picture" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* live end*/}
      {/* community */}
      <section className="community">
        <div className="container">
          <div className="grid">
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{communityData.heading}</h2>
                {communityData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="communityleft">
                <div className="certification-flex">
                  <div className="certification-left">
                    <span>#certification-tips</span>
                    <span>#ask-an-expert</span>
                  </div>
                  <div className="certification-right">
                    <figure>
                      <img alt="sarah" src="images/participants.svg" />
                      <img alt="sarah" src="images/participants1.svg" />
                      <img alt="sarah" src="images/participants2.svg" />
                    </figure>
                    <p>15 participants</p>
                  </div>
                </div>
                <div className="michelle">
                  <figure>
                    <img alt="sarah" src="images/ai1.svg" />
                  </figure>
                  <div className="michelle-box">
                    <h3>Michelle Anderson</h3>
                    <p>
                      Anyone here implemented Einstein AI for case routing?
                      Looking for best practices.
                    </p>
                  </div>
                </div>
                <div className="michelle">
                  <figure>
                    <img alt="sarah" src="images/ai2.svg" />
                  </figure>
                  <div className="michelle-box">
                    <h3>AI Assistant</h3>
                    <p>Here are some relevant resources from the community:</p>
                    <ul>
                      <li>
                        <img alt="sarah" src="images/video1.svg" />
                        Einstein Case Routing Guide
                      </li>
                      <li>
                        <img alt="sarah" src="images/video3.svg" />
                        Implementation Workshop Recording
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div classname="item">
              <div className="community-right">
                <h3>Trending Topics</h3>
                {trendingData.map((item, index) => (
                  <div className="trending-box" key={index}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.responses} responses • {item.status}
                    </p>
                  </div>
                ))}
                <a href="#" class="primary-btn">
                  Join the Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* community end*/}

      {/* build */}
      <section className="build">
        <div className="container">
          <div className="grid">
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{build.heading}</h2>
                {build.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </div>
          <div className="slider-build">
           
          {teamData.map((member, index) => (
          <div className="build-box">
              <div className="build-flex">
                <figure>
                  <img src={member.image} alt={member.name} />
                </figure>
                <div className="build-box-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <span>{member.channel}</span>
                </div>
              </div>
              <p className="quote">{member.description}</p>
            </div>
                ))}


          </div>
          <a href="#" class="primary-btn">
            Register Now
          </a>
        </div>
        <div className="build-layer">
          <img src="images/build-layer.png" alt="build-layer.png" />
        </div>
      </section>
      {/* build end */}
      {/* exclusive */}
      <section className="exclusive">
        <div className="container">
          <div className="grid">
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{exclusiveData.heading}</h2>
                {exclusiveData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap">
            {cardData.map((item, index) => (
              <div className="item" key={index}>
                <div className="card">
                  <figure>
                    <img
                      src={item.imgSrc}
                      alt="Guide Image"
                      className="card-img"
                    />
                  </figure>
                  <div className="card-content">
                    <span className="badge">{item.badge}</span>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* exclusive end */}
      {/* fun-bnr */}
      <section className="fun-bnr">
        <div className="container">
          <div className="grid">
            <div className="item">
              <h3>A Community Built for Learning &amp; Fun</h3>
              <p>
                Yes, we talk Salesforce, but we also have a #banter channel for
                fun conversations, Salesforce memes, and casual networking.
                Because learning is better when it doesn't feel like work.
              </p>
              <a href="#" className="primary-btn">
                <img src="/images/joinvector.svg" alt="joinvector" /> Join the
                SalesforceHub Slack Now!
              </a>
            </div>
          </div>
        </div>
      </section>
        {/* fun-bnr end */}
    </>
  );
}
