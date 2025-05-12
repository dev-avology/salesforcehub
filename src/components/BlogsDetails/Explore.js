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
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500, // Delay between slide transitions (in ms)
                disableOnInteraction: false, // Keep autoplay running after interaction
              }}
            >
              <SwiperSlide>
                <div>
                    
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 2</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 3</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
