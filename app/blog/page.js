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

import "./blog.css";

export default function page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log(posts);

  return (
    <div className="main">
      <Header />
      <section class="inner-blog pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 my-posts">
              {posts.map((post, index) => (
                <div key={index} className="bsingle__post mb-50">
                  <div className="bsingle__content">
                    {/* <Output data={post.post} /> */}
                    {
                    post.post.blocks.map((block) => {
                      if (block.type === "header") {
                        return (
                          <HeaderOutput key={block.id} data={block.data} />
                        );
                      }

                    })}

                    <Link href={`/blog/${post._id}`}>
                      <div>Read More</div>
                    </Link>

                    <div class="meta-info">
                      <ul>
                        <li>
                          <i class="fal fa-calendar-alt"></i>{" "}
                          {new Date(post.createdAt).toDateString()}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="posts"></div>
      <Footer />
    </div>
  );
}
