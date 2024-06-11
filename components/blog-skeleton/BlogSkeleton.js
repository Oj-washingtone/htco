import React from "react";
import "./blog-skeleton.css";

export default function BlogSkeleton() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton image"></div>
      <div className="skeleton header"></div>
      <div className="skeleton subheader"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line"></div>
    </div>
  );
}
