"use client";

import React, { useState, useEffect } from "react";
import "./blogsection.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog/latest")
      .then((res) => res.json())
      .then((data) => {
        const postSummaries = [];

        data.forEach((post) => {
          const postSurmmary = {
            id: post._id,
            title: "",
            description: "",
            image: "",
            createdAt: post.createdAt,
          };

          const postContent = post.post;

          postContent.blocks.forEach((block) => {
            switch (block.type) {
              case "header":
                if (!postSurmmary.title) {
                  postSurmmary.title = block.data.text;
                }
                break;
              case "paragraph":
                if (!postSurmmary.description) {
                  postSurmmary.description = block.data.text;
                }
                break;
              case "image":
                if (!postSurmmary.image) {
                  postSurmmary.image = block.data.file.url;
                }
                break;
              default:
                break;
            }
          });

          postSummaries.push(postSurmmary);
        });
        setPosts(postSummaries);
      });
  }, []);

  return (
    posts.length > 0 && (
      <div className="row features-section">
        <div className="section-header">
          <h4 className="poppins-extrabold section-title">News</h4>
          <h3 className="poppins-extrabold about-intro">Latest from Blog</h3>
        </div>

        <div className="col-12">
          <div className="row blog-section">
            {posts.map((post, index) => {
              return (
                <div key={index} className="col-sm-6 my_post_section">
                  <div className="blog-item  row">
                    <div className="blog-img col-5">
                      <img src={post.image} alt="posy image" />
                    </div>
                    <div className="blog-content col-7">
                      <h5 className="poppins-extrabold blog-title">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h5>
                      <p className="blog-date">
                        {new Date(post.createdAt).toDateString()}
                      </p>
                      <p className="blog-desc">{post.description}</p>
                      <Link href={`/blog/${post.id}`} className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/blog">
              <button className="my-btn custom-btn-fill">View All</button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
