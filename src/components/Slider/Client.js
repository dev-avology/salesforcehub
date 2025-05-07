import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from 'swiper/modules';

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

function Client() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={false}
        pagination={false}
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Client;
