"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Output from "editorjs-react-renderer";
import Link from "next/link";
import {
  HeaderOutput,
  ParagraphOutput,
  ImageOutput,
} from "editorjs-react-renderer";
import Image from "next/image";

import "./blog.css";

export default function page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        const newPosts = [];
        // loop through the data and console log each post
        data.forEach((my_post) => {
          const postSurmmary = {
            id: my_post._id,
            title: "",
            description: "",
            image: "",
            createdAt: my_post.createdAt,
          };

          const post = my_post.post;
          post.blocks.forEach((block) => {
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

          newPosts.push(postSurmmary);
        });
        setPosts(newPosts);
      });
  }, []);

  console.log(posts);

  return (
    <div className="main">
      <Header />
      <section class="inner-blog pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 my-posts">
              {posts.map((post, index) => {
                if (index === 0) {
                  return (
                    <div key={index} className="latest-blog-wrapper">
                      <div className="latest-post-image-wrapper">
                        <img src={post.image} alt="" />
                      </div>
                      <div className="bsingle__content">
                        <h2>
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="post-discription">{post.description}</p>

                        <div className="meta-info">
                          <ul>
                            <li>
                              <i className="fal fa-calendar-alt"></i>{" "}
                              {new Date(post.createdAt).toDateString()}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row">
                {posts.map((post, index) => {
                  if (index !== 0) {
                    return (
                      <div key={index} className="col-sm-6">
                        <Link href={`/blog/${post.id}`}>
                          <div className="single__post row">
                            <div className="col-sm-5 post-image">
                              <img src={post.image} alt="" />
                            </div>

                            <div className="col-sm-6 post-text">
                              <h5 className="snap-header">{post.title}</h5>

                              <p className="post-discription">
                                {post.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="posts"></div>
      <Footer />
    </div>
  );
}
