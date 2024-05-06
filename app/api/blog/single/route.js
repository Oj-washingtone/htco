import { NextResponse } from "next/server";

import mongoose from "mongoose";
import db from "@/utils/db";
import BlogPost from "@/models/BlogPost";

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const post = await BlogPost.findById(id);
  return NextResponse.json(post);
}
