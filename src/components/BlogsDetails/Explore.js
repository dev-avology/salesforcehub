import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const tags = [
  { label: "AI", url: "/tags/ai" },
  { label: "AI Research", url: "/tags/ai-research" },
];

const sliderData = [
  {
    id: 1,
    image: "images/Silvio.png",
    name: "Jay Prasad",
    position: "Salesforce Technical Architect",
    description:
      "Jay Prasad is a seasoned Salesforce Technical Architect and Developer with over 15 years of experience working with companies from small startups to large enterprises. With a strong background in Salesforce, AWS, Azure and Adobe, he knows how to turn real business needs into practical, scalable solutions.",
    link: "/profile/jay-prasad",
    arrow: "images/Vectorright.svg",
  },
  {
    id: 2,
    image: "images/Silvio.png",
    name: "Jay Prasad",
    position: "Salesforce Technical Architect",
    description:
      "Jay Prasad is a seasoned Salesforce Technical Architect and Developer with over 15 years of experience working with companies from small startups to large enterprises. With a strong background in Salesforce, AWS, Azure and Adobe, he knows how to turn real business needs into practical, scalable solutions.",
    link: "/profile/jay-prasad",
    arrow: "images/Vectorright.svg",
  },
  {
    id: 3,
    image: "images/Silvio.png",
    name: "Jay Prasad",
    position: "Salesforce Technical Architect",
    description:
      "Jay Prasad is a seasoned Salesforce Technical Architect and Developer with over 15 years of experience working with companies from small startups to large enterprises. With a strong background in Salesforce, AWS, Azure and Adobe, he knows how to turn real business needs into practical, scalable solutions.",
    link: "/profile/jay-prasad",
    arrow: "images/Vectorright.svg",
  },
  {
    id: 4,
    image: "images/Silvio.png",
    name: "Jay Prasad",
    position: "Salesforce Technical Architect",
    description:
      "Jay Prasad is a seasoned Salesforce Technical Architect and Developer with over 15 years of experience working with companies from small startups to large enterprises. With a strong background in Salesforce, AWS, Azure and Adobe, he knows how to turn real business needs into practical, scalable solutions.",
    link: "/profile/jay-prasad",
    arrow: "images/Vectorright.svg",
  },
];

function Explore() {
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={10}
    slidesPerView={3}
    breakpoints={{
      1200: { slidesPerView: 3, spaceBetween: 0 },
      1024: { slidesPerView: 3, spaceBetween: 0 },
      768: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    navigation={false}
    pagination={false}
  ></Swiper>;
  return (
    <>
      <section className="explore-details">
        <div className="container">
          <div className="heading">
            <h3>Explore related content by topic</h3>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link href={tag.url}>{tag.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="explore-slider">
            <div className="slider-container-layer">
              <img alt="cloud.png" src="images/cloud.png"></img>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500, // Delay between slide transitions (in ms)
                disableOnInteraction: false, // Keep autoplay running after interaction
              }}
               loop={true} // Optional: Enable looping through slides
            >
              {sliderData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slider-container">
                    <div className="slider-flexbar">
                      <div className="slider-image">
                        <img src={item.image} alt="professional" />
                      </div>
                      <div className="slider-content">
                        <h3 className="slider-name">{item.name}</h3>
                        <span className="slider-position">{item.position}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <Link href={item.link}>
                      More Articles by Jay <img src={item.arrow} alt="arrow" />
                    </Link>
                    <div className="author-layer">
                      <img src="images/author.png" alt="author" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
