"use client";
import { useState } from "react";

export default function Category() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Diabetes",
    "pressure",
    "Pride",
    "Baby",
    "Health",
  ];

  return (
    <div className="container">
        <div className="row">
          <div className="category-section container my-4">
            <h4 className="category-title">Category</h4>
            <div className="category-list d-flex gap-3">
                {categories.map((cat, idx) => (
                 <button
                    key={idx}
                    className={`category-pill ${active === cat ? "active" : ""}`}
                    onClick={() => setActive(cat)}
                  
                 >
                    {cat} 
                </button>
                ))}
            </div>
            </div>
        </div>
    </div>
  );
}
