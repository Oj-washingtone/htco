"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Output from "editorjs-react-renderer";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import BlogSkeleton from "@/components/blog-skeleton/BlogSkeleton";

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

  const config = {
    header: {
      disableDefaultStyle: true,
    },
    image: {
      disableDefaultStyle: true,
    },
    video: {
      disableDefaultStyle: true,
    },
  };

  const style = {
    header: {
      textAlign: "left",
    },
    image: {
      img: {
        width: "100%",
      },
      figure: {
        backgroundColor: "white",
        border: "1px solid #eee",
      },
      figcaption: {
        borderRadius: "5px",
      },
    },

    embed: {
      video: {
        maxHeight: "400px",
      },
      figure: {
        justifyContent: "center",
      },
      figcaption: {
        borderRadius: "5px",
      },
    },
    paragraph: {
      textAlign: "left",
      cursor: "default",
    },
    list: {
      textAlign: "left",
    },
    checklist: {
      container: {},
      item: {},
      checkbox: {},
      label: {},
    },

    quote: {
      container: {},
      content: {},
      author: {
        fontWeight: "bold",
      },
      message: {
        textAlign: "left",
      },
    },
  };

  return (
    <div className="main-post-area">
      <Header />
      <div class="container">
        <div class="row">
          {postData.length === 0 ? (
            <BlogSkeleton />
          ) : (
            <div class="col-lg-10 my-posts">
              <div className="">
                {postData?.createdAt && (
                  <p>
                    <i class="fal fa-calendar-alt"></i>{" "}
                    {new Date(postData?.createdAt).toDateString()}
                  </p>
                )}
                <Output data={postData.post} config={config} />

                <div class="meta-info">
                  <ul></ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div class="row comment-section"></div>
      </div>
      <Footer />
    </div>
  );
}
