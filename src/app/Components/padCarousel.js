"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";

const products = [
  { 
    id: 1,
    title: "Galaxy M13",
    img: "/assets/pad1.png",
    price: "₹10499",
    oldPrice: "₹14999",
    discount: "56% OFF",
    save: "₹4500",
  },
  {
    id: 2,
    title: "Galaxy M13",
    img: "/assets/pad2.png",
    price: "₹10499",
    oldPrice: "₹14999",
    discount: "56% OFF",
    save: "₹4500",
  },
  {
    id: 3,
    title: "Galaxy M13",
    img: "/assets/pad3.png",
    price: "₹10499",
    oldPrice: "₹14999",
    discount: "56% OFF",
    save: "₹4500",
  },
  {
    id: 4,
    title: "Galaxy M13",
    img: "/assets/pad4.png",
    price: "₹10499",
    oldPrice: "₹14999",
    discount: "56% OFF",
    save: "₹4500",
  },
  {
    id: 5,
    title: "Galaxy M13",
    img: "/assets/pad5.png",
    price: "₹10499",
    oldPrice: "₹14999",
    discount: "56% OFF",
    save: "₹4500",
  },
];

export default function PadsCarousel() {
  return (
    <section className="pads-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2>
            Grab the best deal on <span className="highlight">Pads</span>
          </h2>
          <a href="#" className="view-all">View All →</a>
        </div>

        {/* Swiper Carousel*/}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pads-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="pad-card">
                <div className="badge_image_wrapper">
                  {/* Discount Badge */}
                  <div className="badge">{product.discount}</div>
                  {/* Product Image */}
                  <div className="pad-thumb">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={200}
                      height={160}
                      className="pad_image"
                      {...(index === 0
                        ? { priority: true }
                        : { loading: "lazy" })}
                    />
                  </div>
                </div>
                <div className="text_content_wrapper">
                  {/* Product Info */}
                  <h3>{product.title}</h3>
                  <div className="price-section">
                    <span className="price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                  <p className="save">Save - {product.save}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
