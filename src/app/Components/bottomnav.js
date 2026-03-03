"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function BottomNavbar() {
  const [active, setActive] = useState("Groceries");
  const [openDropdown, setOpenDropdown] = useState(null);

  const menus = [
    { name: "Groceries", sub: ["Rice", "Oil", "Snacks"] },
    { name: "Premium Fruits", sub: ["Apple", "Mango", "Banana"] },
    { name: "Home & Kitchen", sub: ["Cookware", "Dinner Set"] },
    { name: "Fashion", sub: ["Men", "Women", "Kids"] },
    { name: "Electronics", sub: ["Mobile", "Laptop", "TV"] },
    { name: "Beauty", sub: ["Makeup", "Skin Care"] },
    { name: "Home Improvement", sub: ["Furniture", "Lighting"] },
    { name: "Sports, Toys & Luggage", sub: ["Football", "Badminton", "Bags"] }
  ];

  return (
    <div className="bottom-navbar bottom_nav_component shadow-sm bg-white py-3">
      <div className="container d-flex justify-content-start flex-wrap gap-2">
        {menus.map((menu, i) => (
          <div key={i} className="position-relative">
            <Link
              href="#"
              className={`nav-pill ${active === menu.name ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(menu.name);
                setOpenDropdown(openDropdown === i ? null : i);
              }}
            >
              {menu.name}
              <span className="dropdown-arrow">
                <Image
                  className="down_arrow"
                  src="/Arrow_down.svg"
                  alt="down_arrow"
                  width={24}
                  height={24}
                  priority
                />
              </span>
            </Link>

            {/* Dropdown */}
            {openDropdown === i && (
              <ul className="dropdown-menu show">
                {menu.sub.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}




