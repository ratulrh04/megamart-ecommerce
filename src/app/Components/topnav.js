"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/main.scss";

export default function Topnav() {
  return (
    <div>
      {/* Top Navbar start here */}
      <div className="topnav-wrapper">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link href="#" className="navbar-brand">
                <span>Welcome to world wide Megamart</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="#">
                      <Image
                        className="topnav-icon"
                        src="/Location.svg"
                        alt="Location Icon"
                        width={24}
                        height={24}
                        priority
                      />
                      <span>
                        Deliver to <b>426351</b>{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <Image
                        className="topnav-icon"
                        src="/Track.svg"
                        alt="Track Icon"
                        width={24}
                        height={24}
                        priority
                      />
                      <span>Track Your order </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <Image
                        className="topnav-icon"
                        src="/Discount.svg"
                        alt="Discount Icon"
                        width={24}
                        height={24}
                        priority
                      />
                      <span>All Offers</span>
                    </Link>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Top Navbar end here */}
    </div>
  );
}
