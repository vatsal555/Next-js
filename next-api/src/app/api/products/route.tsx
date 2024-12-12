import { mongoDBConnect } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data: any[] = [];
  try {
    await mongoose.connect(mongoDBConnect);
    data = await Product.find();
    // console.log(data);
  } catch (error) {
    // data = { success: false };
    data = { result: "error" };
  }

  return NextResponse.json({ result: data, success: true }, { status: 201 });
}

export async function POST(req) {
  const payLoad = await req.json();
  await mongoose.connect(mongoDBConnect);
  let product = new Product(payLoad);
  const result = await product.save();
  return NextResponse.json({ result, success: true }, { status: 201 });
}
