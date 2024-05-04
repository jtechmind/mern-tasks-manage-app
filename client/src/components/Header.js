import React, { useState } from "react";
import "../header.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [createNew, setCreateNew] = useState();
  const headerLinks = ["link1", "link2"];
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>Tasks</span>
            <span>Management</span>
          </h2>
        </div>
        <div className="menu-links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Task Management App</h1>
      </section>
    </>
  );
}

export default Header;
