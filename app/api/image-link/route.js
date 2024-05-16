import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  const url = body.url;

  return NextResponse.json({
    success: 1,
    file: {
      url: url,
    },
  });
}
