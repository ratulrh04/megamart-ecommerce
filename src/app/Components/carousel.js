"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    // Only run in client-side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container carousel_container">
      <div className="row">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          suppressHydrationWarning={true} // Ignore SSR mismatch 
        >
          <div className="carousel-inner">
            {/* Slides */}
            <div className="carousel-item active">
              <div className="carousel-content d-flex align-items-center justify-content-between p-4">
                <div className="text-content">
                  <h4 className="mb-2">Best Deal Online on sanitary Pad</h4>
                  <h1 className="fw-bold">50% OFF</h1>
                  <p>UP to 80 Tk</p>
                </div>
                <div className="image-content"><Image
                                                src="/pad.svg"
                                                alt="Carousel Image 1"
                                                width={470}
                                                height={300}
                                                priority  
                                              />
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="carousel-content d-flex align-items-center justify-content-between p-4">
                <div className="text-content">
                  <h4 className="mb-2">Special Offer on Fruits</h4>
                  <h1 className="fw-bold">30% OFF</h1>
                  <p>UP to 100 Tk</p>
                </div>
                <div className="image-content"><Image
                                                src="/pad.svg"
                                                alt="Carousel Image 1"
                                                width={470}
                                                height={300} 
                                              />
                </div>
              </div>
            </div>

              {/* Slide 3 */}
            <div className="carousel-item">
              <div className="carousel-content d-flex align-items-center justify-content-between p-4">
                <div className="text-content">
                  <h4 className="mb-2">Special Offer on Fruits</h4>
                  <h1 className="fw-bold">30% OFF</h1>
                  <p>UP to 100 Tk</p>
                </div>
                  <div className="image-content"><Image
                                                src="/pad.svg"
                                                alt="Carousel Image 1"
                                                width={470}
                                                height={300} 
                                              />
                 </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="custom-prev" aria-hidden="true">
              ‹
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="custom-next" aria-hidden="true">
              ›
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
