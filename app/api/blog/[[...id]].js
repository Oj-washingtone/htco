import { NextResponse } from "next/server";

import mongoose from "mongoose";
import db from "@/utils/db";
import BlogPost from "@/models/BlogPost";

export async function GET(req, res) {
  const { id } = req.params;
  // get all blog posts from db order by latest on top
  //   const posts = await BlogPost.findById(id);
  //   return NextResponse.json(posts);

  return NextResponse.json({ message: "success" });
}
