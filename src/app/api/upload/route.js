import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "divxrmzge",
  api_key: "885648986317575",
  api_secret: "qtug-e7HHiGrUgVkeLW8V3-56Mc",
});

export async function POST(request) {
  try {
    const data = await request.formData();
    console.log(data.get("file"));
    const image = data.get("file");

    if (!image) {
      console.error("No data received from the form");
      return NextResponse.json({ error: "No data received from the form" });
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    //guardar en un archivo
    const filepath = path.join(process.cwd(), "public", image.name);
    await writeFile(filepath, buffer);
    const response = await cloudinary.uploader.upload(filepath);
    console.log(response.secure_url);
    return NextResponse.json({
      url: response.secure_url,
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ error: "Error processing the request" });
  }
}
