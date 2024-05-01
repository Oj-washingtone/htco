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
    return NextResponse.json({ message: "Failed to save to database" });
  }

  return NextResponse.json({ message: "Blog saved successfully" });
}

export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
