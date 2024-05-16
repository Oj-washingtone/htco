"use client";

import React, { useState, useEffect } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (pathname) => router.pathname === pathname;

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

                    <span>humanitytouch0@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <span>+254 713 062 616</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-lg-block">
              <div className="header-social text-right">
                <span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559220865285"
                    title="Facebook"
                    target="blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/humanity-touch-1a7052307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    title="LinkedIn"
                    target="blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61559247080883&mibextid=ZbWKwL">
                    <i className="fab fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" menu-wrapper">
        <Link href="/">
          <div className="logo">
            <div className="logo-image">
              <Image
                src="/img/logo/logo.png"
                width={100}
                height={100}
                alt="HTCO Logo"
              />
            </div>
            <div className="logo-text">
              <h2 className="poppins-extrabold org-name">
                Humanity Touch Org.
              </h2>
              <p className="tagline">We build dreams.</p>
            </div>
          </div>
        </Link>
        <div className="menu">
          <ul>
            <li>
              <Link href="/">
                <div className={isActive("/") ? "active-route" : ""}>Home</div>
              </Link>
            </li>
            <li className={isActive("/#about") ? "active-route" : ""}>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/#activities">Activities</Link>
            </li>
            <li>
              <Link href="#faq">FAQs</Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li className="custom-btn">
              <Link href="/#contact-us">
                <div className="contact-us-btn">Get Intouch</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle menu btn */}
        <div className="toggle-menu">
          <div className="toggle-menu-btn">
            <button className="toggle-menu-btn" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu-small">
            <div className="close-menu-wrapper">
              <button className="close-menu-btn" onClick={closeMenu}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#activities" onClick={closeMenu}>
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/#faq" onClick={closeMenu}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact-us" onClick={closeMenu}>
                  Get Intouch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
