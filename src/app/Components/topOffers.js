"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    img: "/assets/offer1.png",
  },
  {
    id: 2,
    img: "/assets/offer2.png",
  },
  {
    id: 3,
    img: "/assets/offer3.png",
  },
  {
    id: 4,
    img: "/assets/offer1.png",
  },
  {
    id: 5,
    img: "/assets/offer2.png",
  },
];

export default function PadsCarousel() {
  return (
    <section className="topOffer-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2>
            Top <span className="highlight">Offers</span>
          </h2>
          <a href="#" className="view-all">
            View All →
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pads-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="pad-slide">
                <div className="pad-content">
                  <div className="pad-text">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="price-badge">{product.description}</div>
                  <div className="pad-image">
                    <Image
                      src={product.img}
                      alt="image"
                      width={400}
                      height={200}
                      className="pad_image"
                      {...(index === 0
                        ? { priority: true }
                        : { loading: "lazy" })}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
