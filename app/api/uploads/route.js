import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// POST endpoint for uploading images
export async function POST(req, res) {
  try {
    // get the file from the request from the body whic is ReadableStream { locked: false, state: 'readable', supportsBYOB: false }
    const data = await req.formData();
    const image = data.get("image");

    if (!image || !(image instanceof File)) {
      console.log("No image found");
      return NextResponse.json({ message: "No image found" });
    }

    // make image name unique
    const imageExt = image.name.split(".").pop();
    const imageId = Date.now();
    const imageName = `${imageId}.${imageExt}`;

    const filePath = path.join("public", "img", "blog", imageName);

    // an instance of buffer
    const buffer = await image.arrayBuffer();
    await fs.promises.writeFile(filePath, Buffer.from(buffer));

    console.log("Image uploaded successfully");

    // responf to Editor js with the correct response
    return NextResponse.json({
      success: 1,
      file: {
        url: `https://humanitytouch.org/img/blog/${imageName}`,
      },
    });
  } catch (err) {
    console.log("an error occurred");
    console.log(err);
    return NextResponse.json({ message: "Failed to upload image" });
  }
}
