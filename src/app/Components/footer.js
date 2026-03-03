"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container top-container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 footer-logo-col">
            <ul >
              <li>
                <Link href="#">
                  <h1 className="footer_heading">MegaMart</h1>
                </Link>
              </li>
              <li className="contact-title">Contact Us</li>
              <li className="contact-item">
                <Image loading="lazy" src="/whatsApp.svg" alt="WhatsApp" width={20} height={20} />
                <span>Whats App</span>
              </li>
              <li className="phone-number">+1 202-918-2132</li>

              <li className="contact-item">
                <Image loading="lazy" src="/Call.svg" alt="Call" width={20} height={20} />
                <span>Call Us</span>
              </li>
              <li className="phone-number">+1 202-918-2132</li>

              <li className="download-title">Download App</li>
              <li>
                <Link href="#">
                  <Image loading="lazy" src="/playStore.svg" alt="Playstore" width={150} height={45} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h2 className="footer-title">Most Popular Categories</h2>
            <ul>
              <li><Link href="#">Staples</Link></li>
              <li><Link href="#">Beverages</Link></li>
              <li><Link href="#">Personal Care</Link></li>
              <li><Link href="#">Home Care</Link></li>
              <li><Link href="#">Baby Care</Link></li>
              <li><Link href="#">Vegetables & Fruits</Link></li>
              <li><Link href="#">Snacks & Foods</Link></li>
              <li><Link href="#">Dairy & Bakery</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <h2 className="footer-title">Customer Services</h2>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">E-waste Policy</Link></li>
              <li><Link href="#">Cancellation & Return Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <h2 className="footer-title last_foote_title">Customer Services</h2>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">E-waste Policy</Link></li>
              <li><Link href="#">Cancellation & Return Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Capsule Svg */}
        <Image loading="lazy" className="capsule_svg" src="/capsule.svg" alt="capsule" width={400} height={400} />

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>© 2025 All rights reserved. Aegale</p>
        </div>
      </div>

      {/* Responsive navbar start here */}
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row"> 
              <nav className="navbar navbar-expand bg-light bottom-navbar footer_bottom_nav">
                <div className="container-fluid justify-content-around">
                  <div className="navbar-nav w-100 d-flex justify-content-around text-center">
                    
                    <Link href="#" className="nav-link active">
                      <Image
                        className="home_svg"
                        src="/home.svg" 
                        alt="home"
                        width={24}
                        height={24}
                        priority
                      />
                      <div>Home</div>
                    </Link>

                    <Link href="#" className="nav-link">
                      <Image
                        className="massage_svg"
                        src="/whatsApp.svg" 
                        alt="whatsapp"
                        width={24}
                        height={24}
                        priority
                      />
                      <div>Message</div>
                    </Link>

                    <Link href="#" className="nav-link">
                      <Image
                        className="buy_svg"
                        src="/footer_buy.svg" 
                        alt="buy"
                        width={24}
                        height={24}
                        priority
                      />
                      <div>Checkout</div>
                    </Link>

                    <Link href="#" className="nav-link">
                      <Image
                        className="footer_user_svg"
                        src="/footer_user.svg" 
                        alt="user"
                        width={24}
                        height={24}
                        priority
                      />
                      <div>Profile</div>
                    </Link>

                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive navbar end here */}

    </footer>
  );
}
