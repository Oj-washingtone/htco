"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Output from "editorjs-react-renderer";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

import "./blog-single.css";

export default function page() {
  const [postData, setPosts] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // send request to /api/blog/single?id=id
    fetch(`/api/blog/single?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, [id]);

  return (
    <div className="main-post-area">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-lg-10 my-posts">
            <div className="">
              <p>
                <i class="fal fa-calendar-alt"></i>{" "}
                {new Date(postData.createdAt).toDateString()}
              </p>
              <Output data={postData.post} />

              <div class="meta-info">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
