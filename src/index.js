import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import Client from "@/components/Slider/Client";
import Footer from "@/components/HeaderFooter/Footer";
import { motion } from "framer-motion"; // Import Framer Motion
import CountUp from "react-countup"; // Import CountUp for counter animation
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import API from '../services/api';
import NewsletterModal from "@/components/NewsLetter/NewsletterModal";
import ConfirmModal from "@/components/NewsLetter/confirmModel";
import FormattedDate from "@/components/NewsLetter/FormattedDate";
import Login from "@/components/Login";
import { useRouter } from 'next/router';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="custom-model log ">
      <div className="modal-overlay">
        <div className="modal">{children}</div>
      </div>
    </div>
  );
}


export const getServerSideProps = async () => {

  const blogsRes = await API.get('api/events?populate=Avatar');
  const events = blogsRes.data.data;

  return {
    props: {
      events,
    },
  };
};

// Data definitions remain unchanged
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
    title: "What's the best way to prepare for the CTA exam?",
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

// Animation variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 },
};

export default function Home({ events }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState(events || []);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [confirmType, setConfirmType] = useState("info");
  const [todayDate, setTodayDate] = useState(new Date());
  const { Authuser, isAuthenticated } = useAuthContext();
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const router = useRouter();

  const refresh = () => {
    router.replace(router.asPath);
  };

  const openModal = () => {
    setIsModalLoginOpen(true);
  }
  const closeModal = () => setIsModalLoginOpen(false);


  useEffect(() => {
    if (events && events.length > 0) {
      setEvent(events);
    }
  }, [events]);




  const today = new Date();

const closestDateEvent = events
  .filter(event => new Date(event.Date) >= today)
  .reduce((closest, curr) => {
    const currDate = new Date(curr.Date);
    const closestDate = new Date(closest.Date);
    return currDate < closestDate ? curr : closest;
  });





  const handleEventSeat = async (eventId) => {

      if (!isAuthenticated) return openModal();

    const userId = Authuser.id; 
    const eventPayload = {
      data: {
        events: eventId,
        EventID: eventId,
        user: userId,
      },
    };

    try {
      const checkRes = await API.get(
        `/api/participents?filters[user][$eq]=${userId}`
      );

      const alreadyReg = checkRes.data?.data || [];
      
      const hasRegister = alreadyReg.find((val) => val?.EventID === eventId);

      if (hasRegister) {
        setConfirmMsg("User already registered for this event!");
        setConfirmType("success");
        setConfirmOpen(true);


        return;
      }
      const eventRes = await API.get(`/api/events/${eventId}`);
      const currentSeats = eventRes?.data?.data?.availableSeats;

      if (currentSeats > 0) {
        const registerRes = await API.post('/api/participents', eventPayload);

        setConfirmMsg("Registration successful");
        setConfirmType("success");
        setConfirmOpen(true);
        refresh();



        await API.put(`/api/events/${eventId}`, {
          data: {
            availableSeats: currentSeats - 1,
          },
        });

      } else {
        setConfirmMsg("No available seats left");
        setConfirmType("success");
        setConfirmOpen(true);
      }

    } catch (error) {
      console.error("Error booking seat:", error.response?.data || error.message);
    }
  };



  const handleUserData = async (e) => {
    e.preventDefault();

    try {
      const existingSubscribers = await API.get('/api/subscribers');
      const subscribers = existingSubscribers?.data?.data;

      const emailExists = subscribers.some(
        (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
      );

      if (emailExists) {
        setConfirmMsg("This email is already subscribed.");
        setConfirmType("error");
        setConfirmOpen(true);
        setEmail('');
        setName('');
        return;
      }

      await API.post('/api/subscribers', {
        data: {
          name,
          email,
        },
      });
      setIsModalOpen(false);
      setConfirmMsg("Successfully subscribed to the newsletter!");
      setConfirmType("success");
      setConfirmOpen(true);
      setIsModalOpen(false);
      setEmail('');
      setName('');
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Banner
        heading="SalesforceHUB"
        colorHeading="Connect, Learn, Grow"
        para="Join the first AI-powered community for Salesforce professionals. Get instant answers, expert insights, and career growth opportunities."
        btn="Join SalesforceHub Now – It's Free"
        heroLayer="/images/hero-layer.png"
        heroLayerphone="/images/hero-layer2.png"
        heroImg="/images/gif-bnr.gif"
      />
      {/* Bottom Banner Section */}
      <motion.section
        className="bootom-bnr"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="bottom-layer">
          <img src="images/bottom-layer.png" alt="bnr-img" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <motion.div className="item" variants={fadeInUp}>
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
            </motion.div>
            <motion.div className="item" variants={fadeInUp}>
              <div className="questions">
                {boxbar.map((boxes, index) => {
                  // Parse the number for counting (remove non-numeric characters like "+" or "/")
                  const numericValue = parseInt(boxes.number.replace(/[^0-9]/g, ""));
                  const displayText = boxes.number; // Keep the original text for display (e.g., "100+", "24/7")

                  return (
                    <motion.div
                      className="box"
                      key={index}
                      variants={fadeInUp}
                    // Removed whileHover to disable hover effect on counters
                    >
                      <h3>
                        {numericValue ? (
                          <CountUp
                            start={0}
                            end={numericValue}
                            duration={2.5}
                            suffix={displayText.replace(numericValue.toString(), "")} // Add back "+", "/" etc.
                          />
                        ) : (
                          displayText // For "24/7", display as is
                        )}
                      </h3>
                      <p>{boxes.para}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Section */}
      <motion.section
        className="join"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="grid" variants={fadeInUp}>
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{whyJoinData.heading}</h2>
                <p>{whyJoinData.paragraph}</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-3 gap" variants={staggerContainer}>
            {joinData.map((item, index) => (
              <motion.div
                className="item"
                key={index}
                variants={fadeInUp}
                whileHover={hoverEffect}
              >
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
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="join-botton" variants={fadeInUp}>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="primary-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join SalesforceHub Today
            </motion.button>
          </motion.div>
          <NewsletterModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            handleUserData={handleUserData}
          />
          <ConfirmModal
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            message={confirmMsg}
            type={confirmType}
          />
        </div>
      </motion.section>

      <section className="join-layer">
        <img src="images/join-layer.png" alt="bnr-img" />
      </section>

      {/* Live Section */}
      <motion.section
        className="live"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="grid" variants={fadeInUp}>
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{liveSectionData.heading}</h2>
                {liveSectionData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap" variants={staggerContainer}>
            <motion.div className="item" variants={fadeInUp}>
              <div className="nex-live">
                <div className="next-flex">
                  <p>Next Live Event</p>
                  <span>Only {closestDateEvent.availableSeats} spots left</span>
                </div>
                <h4>{closestDateEvent.Title}</h4>
                {/* <p>
                  {new Date(closestDateEvent.Date).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",

                  })}
                </p> */}
                <p><FormattedDate date={closestDateEvent.Date} /></p>
                <div className="next-only">
                  <figure>
                    <img src={`${process.env.NEXT_PUBLIC_API_URL}${closestDateEvent.Avatar?.url}`} alt={closestDateEvent.Title} />
                  </figure>
                  <p>
                    <span>{closestDateEvent.name}</span>
                    <span>{closestDateEvent.role}</span>
                  </p>
                </div>
                <motion.button
                  onClick={() => handleEventSeat(closestDateEvent.documentId)}
                  className="primary-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </div>
              <div className="grid">
                <div className="item">
                  <div className="upcoming">
                    <h3>Upcoming Sessions</h3>
                    {event.
                    map((session) => (
                      <motion.div
                        className="upcoming-flex"
                        key={session.documentId}
                        variants={fadeInUp}
                      >
                        <div className="upcoming-box">
                          <h4>{session.Title}</h4>
                          <p><FormattedDate date={session.Date} /></p>
                        </div>
                        <div className="upcoming-btn">
                          <motion.button
                            onClick={() => handleEventSeat(session.documentId)}
                            className="primary-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Save Seat
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item" variants={fadeInUp}>
              <div className="live-picture">
                <img src="images/picture.png" alt="picture" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section
        className="community"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="grid" variants={fadeInUp}>
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{communityData.heading}</h2>
                {communityData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap" variants={staggerContainer}>
            <motion.div className="item" variants={fadeInUp}>
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
            </motion.div>
            <motion.div className="item" variants={fadeInUp}>
              <div className="community-right">
                <h3>Trending Topics</h3>
                {trendingData.map((item, index) => (
                  <motion.div
                    className="trending-box"
                    key={index}
                    variants={fadeInUp}
                    whileHover={hoverEffect}
                  >
                    <h4>{item.title}</h4>
                    <p>
                      {item.responses} responses • {item.status}
                    </p>
                  </motion.div>
                ))}
                <motion.a
                  href="#"
                  className="primary-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Conversation
                </motion.a>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Build Section */}
      <motion.section
        className="build"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="grid" variants={fadeInUp}>
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{build.heading}</h2>
                {build.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="slider-build" variants={staggerContainer}>
            {teamData.map((member, index) => (
              <motion.div
                className="build-box"
                key={index}
                variants={fadeInUp}
                whileHover={hoverEffect}
              >
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
              </motion.div>
            ))}
          </motion.div>
          <motion.a
            onClick={() => setIsModalOpen(true)}
            className="primary-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Community
          </motion.a>
        </div>
        <div className="build-layer">
          <img src="images/build-layer.png" alt="build-layer.png" />
        </div>
      </motion.section>

      {/* Exclusive Section */}
      <motion.section
        className="exclusive"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="grid" variants={fadeInUp}>
            <div className="item">
              <div className="heading-item">
                <h2 className="site-heading">{exclusiveData.heading}</h2>
                {exclusiveData.paragraphs.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-4 gap" variants={staggerContainer}>
            {cardData.map((item, index) => (
              <motion.div
                className="item"
                key={index}
                variants={fadeInUp}
                whileHover={hoverEffect}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Fun Banner Section */}
      <motion.section
        className="fun-bnr"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="grid">
            <motion.div className="item" variants={fadeInUp}>
              <h3>A Community Built for Learning & Fun</h3>
              <p>
                Yes, we talk Salesforce, but we also have a #banter channel for
                fun conversations, Salesforce memes, and casual networking.
                Because learning is better when it doesn't feel like work.
              </p>
              <motion.a
                href="#"
                className="primary-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/images/joinvector.svg" alt="joinvector" /> Join the
                SalesforceHub Slack Now!
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      < Modal isOpen={isModalLoginOpen} onClose={closeModal} >
        <div className="subscribe-modal">
          <h2>Log in to join the discussion</h2>
          <p>Choose a login method to add your comment.</p>
          <div className="subscribe-links">
            <Login cutbox={closeModal} />
          </div>
        </div>
        <button onClick={() => setIsModalLoginOpen(false)} className="cancil-btn">
          <img src="../images/cross.svg" alt="cross.svg" />
        </button>
      </Modal >

    </>
  );
}
