"use client";

import React, { useState } from "react";
import "./admin.css";
import BlogEditor from "@/components/BlogEditor/BlogEditor";

export default function Admin() {
  const [blogPosted, setBlogPosted] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handlePostBlog = () => {
    setBlogPosted(true);
    setIsPosting(true); // Start posting, set isPosting to true
  };

  // Function to handle post success
  const handlePostSuccess = () => {
    setIsPosting(false); // Posting completed, set isPosting to false
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
