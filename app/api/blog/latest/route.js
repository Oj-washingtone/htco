import { NextResponse } from "next/server";

import mongoose from "mongoose";
import BlogPost from "@/models/BlogPost";
import db from "@/utils/db";

export async function GET() {
  try {
    // connect to the database
    await db;

    // get latest 2 posts
    const posts = await BlogPost.find().sort({ createdAt: -1 }).limit(2);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.error(new Error("Failed to fetch blog posts"));
  }
}
