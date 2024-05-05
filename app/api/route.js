import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json({ message: "Hello World" });
}

export async function GET(req, res) {
  return NextResponse.json({ message: "Hello World" });
}
