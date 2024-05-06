"use client";

import React, { useState, useEffect } from "react";
import "./blogsection.css";
import Image from "next/image";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog/latest")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log(posts);

  return (
    <div className="row features-section">
      <div className="section-header">
        <h4 className="poppins-extrabold section-title">News</h4>
        <h3 className="poppins-extrabold about-intro">Latest from Blog</h3>
      </div>

      <div className="col-12">
        <div className="row blog-section">
          <div className="col-sm-6">
            <div className="blog-item">
              <div className="blog-img">
                <Image
                  src="/img/gallery/1.JPG"
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>
              <div className="blog-content">
                <h5 className="poppins-extrabold blog-title">
                  <a href="#">The future of the digital world</a>
                </h5>
                <p className="blog-date">May 12, 2021</p>
                <p className="blog-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="blog-item">
              <div className="blog-img">
                <Image
                  src="/img/gallery/5.JPG"
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>
              <div className="blog-content">
                <h5 className="poppins-extrabold blog-title">
                  <a href="#">The future of the digital world</a>
                </h5>
                <p className="blog-date">May 12, 2021</p>
                <p className="blog-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <button className="my-btn custom-btn-fill">View All</button>
        </div>
      </div>
    </div>
  );
}
