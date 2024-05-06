import { NextResponse } from "next/server";

import mongoose from "mongoose";
import BlogPost from "@/models/BlogPost";

export async function GET() {
  // get latest 2 posts
  const posts = await BlogPost.find().sort({ createdAt: -1 }).limit(2);
  return NextResponse.json(posts);
}
