import { NextResponse } from "next/server";

import mongoose from "mongoose";
import db from "@/utils/db";
import BlogPost from "@/models/BlogPost";

export async function POST(req, res) {
  const data = await req.json();
  const myPost = {
    post: data,
  };

  // save to MongoDB
  try {
    const blog = new BlogPost(myPost);
    await blog.save();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "failed" });
  }

  return NextResponse.json({ message: "success" });
}

export async function GET() {
  // get all blog posts from db order by latest on top
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}


// ednpoint to get latest 2 blogs

