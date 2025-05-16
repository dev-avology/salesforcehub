import Bnrblogs from "@/components/Banner/Bnrblogs";
import CommonBnr from "@/components/Banner/CommonBnr";
import CommonCard from "@/components/Cards/CommonCard";
import CommonDrop from "@/components/Dropdown/CommonDrop";
import FeaturedSec from "@/components/Featured/FeaturedSec";
import Tabs from "@/components/Tabs/Tabs";
import React, { useState,useEffect } from "react";
import API from '../services/api'


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
  buttonLink: "#", // You can change this to the actual link
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
  const [filter,setFilter] =useState("Newest");
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

  return (
    <>
      <Bnrblogs
        layer="/images/blogs-bnr-layer.png"
        layermobile="/images/blogs-bnr-layer.png"
        posts={posts}
      />
      <CommonCard posts={posts} />
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
                  <a href="" className="primary-btn">
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
      <CommonBnr {...joinData} />
    </>
  );
}

export default blog;
