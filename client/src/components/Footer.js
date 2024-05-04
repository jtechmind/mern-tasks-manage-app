import React, { useState } from "react";
import "../header.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  const [createNew, setCreateNew] = useState();
  const headerLinks = ["link1", "link2"];
  return (
    <>
      <nav className="main-nav-footer">
        <div className="logo">
          <h2>
            <span>T</span>
            <span>M</span>
          </h2>
        </div>
        <div className="menu-links-footer"></div>
        <div className="social-media-footer">
          <ul className="social-media-desktop-footer">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Footer;
