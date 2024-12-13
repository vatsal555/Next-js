import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json(
      { result: "No Image Found", success: false },
      { status: 400 }
    );
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ message: "file uploaded", success: true });
};
