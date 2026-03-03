"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";

const products = [
  { id: 1, title: "Daily Essentials", img: "/assets/condom1.png", offer: "UP to 50% OFF" },
  { id: 2, title: "Vegetables", img: "/assets/condom2.png", offer: "UP to 50% OFF" },
  { id: 3, title: "Fruits", img: "/assets/condom3.png", offer: "UP to 50% OFF" },
  { id: 4, title: "Strawberry", img: "/assets/condom4.png", offer: "UP to 50% OFF" },
  { id: 5, title: "Mango", img: "/assets/condom5.png", offer: "UP to 50% OFF" },
  { id: 6, title: "Cherry", img: "/assets/condom6.png", offer: "UP to 50% OFF" },
];

export default function Condom() {
  return (
     <div className="container condom-container">
        <div>
            <section className="deals-section">
      <div className="container">
        {/* Heading */}
        <div className="header">
          <h2>
            Grab the best deal on <span className="highlight">Condom</span>
          </h2>
          <a href="#" className="view-all">View All →</a>
        </div>

        {/* Swiper Slider */}
   <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    spaceBetween={20}
    speed={700}
    breakpoints={{
        0: { slidesPerView: 2 },
        480: { slidesPerView: 4 },
        768: { slidesPerView: 6 },
        1024: { slidesPerView: 6 },   
        1280: { slidesPerView: 6 },   
    }}
    className="deals-swiper"
    >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="deal-card">
                <div className="deal-thumb">
                   <div className="dapper_image_wrapper">
                    <Image
                   
                     src={product.img}
                     alt={product.title}
                     width={180}
                     height={180}
                    />
                   </div>
                  </div>
                 <h3>{product.title}</h3>
                <p>{product.offer}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
     </div>
  );
}
