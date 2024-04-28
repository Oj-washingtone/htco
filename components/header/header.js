import React from "react";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div class="header-top second-header d-none d-md-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-8 d-none d-md-block">
              <div class="header-cta">
                <ul>
                  <li>
                    <i class="fas fa-envelope"></i>

                    <span>info@example.com</span>
                  </li>
                  <li>
                    <i class="far fa-map-marker-alt"></i>
                    <span>12/7 kfjb, gkg Street, kkg</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-none d-lg-block">
              <div class="header-social text-right">
                <span>
                  <a href="#" title="Facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" title="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
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
      </div>
    </header>
  );
}
