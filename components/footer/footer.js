import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg footer-p">
      <div className="footer-top pb-40">
        <div className="container footer-sections">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo logo-footer">
                <div className="logo-image">
                  <Image
                    src="/img/logo/f_logo.png"
                    width={100}
                    height={100}
                    alt="HTCO Logo"
                  />
                </div>
                <div className="logo-text">
                  <h2 className="poppins-extrabold f-org-name">
                    Humanity Touch Org
                  </h2>
                  <p className="tagline">We build dreams.</p>
                </div>
              </div>
              <p>
                We empower local communities through social and economic
                services. As a non-profit, we rely on sponsorships, donations,
                and volunteers to transform dreams into possibilities, even in
                the face of challenges
              </p>
            </div>
            <div className="col-sm-3 footer-section">
              <div>
                <h3 className="poppins-bold footer-section-title">Links</h3>
              </div>
              <div className="footer-links">
                <Link href="/#about">
                  <p className="link-item">
                    <i className="bi bi-chevron-double-right"></i> About
                  </p>
                </Link>

                <Link href="/#activities">
                  <p className="link-item">
                    <i className="bi bi-chevron-double-right"></i> Activities
                  </p>
                </Link>
                <Link href="/#faq">
                  <p className="link-item">
                    <i className="bi bi-chevron-double-right"></i> FAQ
                  </p>
                </Link>
                <Link href="/blog">
                  <p className="link-item">
                    <i className="bi bi-chevron-double-right"></i> Blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-sm-3">
              <h3 className="poppins-bold footer-section-title">Get intouch</h3>
              {/* <div className="footer-contact">
                <i className="bi bi-geo-alt"></i>
                <p>122, Street, city</p>
              </div> */}
              <div className="footer-contact">
                <i className="bx bxs-envelope"></i>
                <p>humanitytouch0@gmail.com</p>
              </div>

              <div className="footer-contact">
                <i className="bx bxs-phone"></i>
                <p>+2547 13 062 616</p>
              </div>
            </div>
            <div className="col-sm-3 footer-gal-wrapper">
              <h3 className="poppins-bold footer-section-title">Gallery</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-gallery-image-wrapper">
                    <div className="overlay"></div>
                    <Image
                      src="/img/gallery/3.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-gallery-image-wrapper">
                    <div className="overlay"></div>
                    <Image
                      src="/img/gallery/4.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-gallery-image-wrapper">
                    <div className="overlay"></div>
                    <Image
                      src="/img/gallery/5.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-gallery-image-wrapper">
                    <div className="overlay"></div>
                    <Image
                      src="/img/gallery/6.JPG"
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row  foter-copy-socials-wrapper">
            <div className="col-lg-6">
              Copyright © 2024 Humanuty Touch Organization.
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3 text-right text-xl-right">
              <ul>
                <li>
                  <span className="footer-social">
                    <a href="https://www.facebook.com/profile.php?id=61559220865285">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61559247080883&mibextid=ZbWKwL">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    //   <!-- footer-end -->
  );
}
