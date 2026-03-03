"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/_middlenav.scss"; // SCSS file

export default function Middlenav() {
  return (
    <header className="midnav-wrapper">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand .navbar_brand_custom d-flex align-items-center">
            {/* <Image
              src="#" // For now commented
              alt="Logo"
              width={40}
              height={40}
              className="me-2"
            /> */}
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className="nav-link">Shape</Link>
            </li>
            <li className="nav-item">
              <Link href="/medicine" className="nav-link">Order Medicine</Link>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex search-box me-3">
            <Image 
              className="search_svg"
              src="/Search.svg" 
              alt="Search-svg"
              width={24}
              height={24}
              priority
            />
            <input
              className="form-control"
              type="search"
              placeholder="Search essentials, groceries and more..."
              aria-label="Search"
            />
            <button className="btn btn-search" type="submit">
              <Image 
                className="threeline"
                src="/threeline.svg" 
                alt="threeline"
                width={14}
                height={14} 
                priority
              />
            </button>
          </form>

          {/* Sign In & Cart */}
          <div className="SingCart_Section d-flex align-items-center">
            <div className="singin">
              <Link href="#" className="nav-link me-3">
                <Image 
                  className="user_svg"
                  src="/user.svg" 
                  alt="user"
                  width={14}
                  height={14} 
                  priority
                />
                <span> Sign Up/Sign In</span>
              </Link>
            </div>
            <div className="buy">
              <Link href="#" className="nav-link">
                <Image 
                  className="buy_svg"
                  src="/Buy.svg" 
                  alt="buy"
                  width={14}
                  height={14} 
                  priority
                />
                <span>Cart</span>
              </Link>
            </div>
            <div className="profile">
              <Link href="#" className="nav-link">
                <Image 
                  className="profile_svg"
                  src="/profile.svg" 
                  alt="profile"
                  width={14}
                  height={14} 
                  priority
                />
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
