import React from "react";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top second-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 d-none d-md-block">
              <div className="header-cta">
                <ul>
                  <li>
                    <i className="fas fa-envelope"></i>

                    <span>info@example.com</span>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt"></i>
                    <span>12/7 kfjb, gkg Street, kkg</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-lg-block">
              <div className="header-social text-right">
                <span>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" menu-wrapper">
        <div className="logo">logo</div>
        <div className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/#activities">Activities</Link>
            </li>
            <li>
              <Link href="#faq">FAQs</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li className="custom-btn">Get Intouch</li>
          </ul>
        </div>

        {/* Toggle menu btn */}
        <div className="toggle-menu">
          <div className="toggle-menu-btn">
            <button></button>
          </div>
          </div>

        <div className="menu-small">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/#activities">Activities</Link>
            </li>
            <li>
              <Link href="#faq">FAQs</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li className="custom-btn">Get Intouch</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
