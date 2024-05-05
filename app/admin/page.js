"use client";

import React, { useState } from "react";
import "./admin.css";
// import BlogEditor from "@/components/BlogEditor/BlogEditor";
import dynamic from "next/dynamic";

const BlogEditor = dynamic(() => import("@/components/BlogEditor/BlogEditor"), {
  ssr: false,
});

export default function Admin() {
  const [blogPosted, setBlogPosted] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handlePostBlog = () => {
    setBlogPosted(true);
    setIsPosting(true);
  };

  // Function to handle post success
  const handlePostSuccess = () => {
    setIsPosting(false);
  };

  return (
    <>
      <div className="blog-section-header">
        <div className="container header-wrapper">
          <p className="poppins-extrabold">HTCO Blog Post</p>
          <button
            className="post-btn"
            onClick={handlePostBlog}
            disabled={isPosting}
          >
            {isPosting ? (
              <div className="spinner">
                <span class="loader"></span> Posting...
              </div>
            ) : (
              "Post blog"
            )}
          </button>
        </div>
      </div>

      <div className="blog-new-page">
        <BlogEditor blogPosted={blogPosted} onPostSuccess={handlePostSuccess} />
      </div>
    </>
  );
}
