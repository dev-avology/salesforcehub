import { motion } from "framer-motion"; // Import framer-motion
import Bnrblogs from "@/components/Banner/Bnrblogs";
import CommonBnr from "@/components/Banner/CommonBnr";
import CommonCard from "@/components/Cards/CommonCard";
import CommonDrop from "@/components/Dropdown/CommonDrop";
import FeaturedSec from "@/components/Featured/FeaturedSec";
import Tabs from "@/components/Tabs/Tabs";
import React, { useState, useEffect } from "react";
import API from '../services/api'
import ConfirmModal from "@/components/NewsLetter/confirmModel";
import NewsletterModal from "@/components/NewsLetter/NewsletterModal";

const imageUrl = "/images/hange.png";

const someTeamData = [
  {
    name: "Jay Prasad",
    role: "Salesforce Technical Architect",
    image: "/images/tony1.svg",
  },
  {
    name: "Priya Sharma",
    role: "Salesforce Developer",
    image: "/images/tony2.svg",
  },
  {
    name: "James Wilson",
    role: "Solution Architect",
    image: "/images/tony3.svg",
  },
];

const joinData = {
  heading: "Join the newsletter & stay up to date!",
  description: `Stay connected and informed! Join our newsletter to receive the latest updates, exclusive offers, and exciting news straight to your inbox`,
  buttonText: "Sign up now",
  buttonLink: "#",
  imageSrclayer2: "/images/most1.png",
  imageSrclayer: "/images/most2.png",
};

export const getServerSideProps = async () => {

  const blogsRes = await API.get('/api/blogs?populate=*');

  const posts = blogsRes.data.data;

  return {
    props: {
      posts,
    },
  };
};

function blog({ posts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
   const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmMsg, setConfirmMsg] = useState("");
    const [confirmType, setConfirmType] = useState("info");

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
      setConfirmMsg("Thanks, you're subscribed!");
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


  const [filter, setFilter] = useState("Newest");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (posts.length > 0) {
      sortComments(filter);
    }
  }, [posts, filter]);



  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    sortComments(filter);
  }

  //filter data
  const sortComments = (filter) => {
    let sortedComments = [...posts];


    switch (filter) {
      case 'Oldest':
        sortedComments.sort((a, b) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateA - dateB; // Oldest first
        });
        break;

      case 'Newest':
        sortedComments.sort((a, b) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateB - dateA; // Newest first
        });
        break;


      default:
        // No sorting
        break;
    }

    setFilteredPosts(sortedComments);
  };


  const allPosts = filteredPosts;


  const categories = [
    "all",
    ...new Set(allPosts.map((post) => post.category).filter(Boolean)),
  ];

  const tabs = categories.map((category) => ({
    label: category === "all" ? "All" : category,
    value: category,
    content: allPosts,
  }));

  // Animation variants for reusability
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Blog Banner with Fade and Slide Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Bnrblogs
          layer="/images/blogs-bnr-layer.png"
          layermobile="/images/blogs-bnr-layer.png"
          posts={posts}
        />
      </motion.div>

      {/* Common Cards with Staggered Fade-In */}

      <CommonCard posts={posts} />

      {/* Blogs Animation Image with Scale Effect */}
      <motion.section
        className="blogs-animation-img"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={imageUrl}
          alt="text"
          className="card-img"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.section>

      {/* Common Tabs Section with Fade and Slide */}
      <motion.section
        className="common-tabs"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <div className="tabs-bar">
                <Tabs tabs={tabs} filteredPosts={filteredPosts} />
                <div className="dropdown-wrapper">
                  <select className="custom-select" onChange={handleFilterChange} value={filter} >
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                  </select>
                  <div className="dropdown-arrow">
                    <img src="../images/drop-arrow.svg" alt="drop-arrow" />
                  </div>
                </div>
              </div>
            </div>
            <motion.div className="item">
              <div className="join-card">
                <figure>
                  <img
                    src="/images/join-conatineer.png"
                    alt="text"
                    className="card-img"
                  />
                </figure>
                <article>
                  <h3>
                    Join the <span>newsletter & stay</span> up to date!
                  </h3>
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="primary-btn"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Subscribe
                  </motion.button>
                </article>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Section with Staggered Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        viewport={{ once: true }}
      >
        <FeaturedSec
          heading="Featured Voices"
          headingImage="/images/message.svg"
          teamMembers={someTeamData}
        />
      </motion.div>

      {/* Common Banner with Fade-In */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CommonBnr {...joinData} />
      </motion.div>

    </>
  );
}

export default blog;
