import { mongoDBConnect } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, content) {
  // console.log(content);
  const productid = content.params.productid;
  const filter = { _id: productid };
  const payLoad = await req.json();
  await mongoose.connect(mongoDBConnect);
  const result = await Product.findOneAndUpdate(filter, payLoad);
  //   console.log(filter);

  // const result: any = [];
  return NextResponse.json({ result, success: true });
}

export async function GET(req: any, res: any) {
  const productId = res.params.productid;
  const record = { _id: productId };
  await mongoose.connect(mongoDBConnect);
  const result = await Product.findById(record);
  return NextResponse.json({ result, success: true }, { status: 201 });
}

export async function DELETE(req: any, res: any) {
  const productId = res.params.productid;
  const record = { _id: productId };
  await mongoose.connect(mongoDBConnect);
  const result = await Product.deleteOne(record);
  return NextResponse.json({ result, success: true }, { status: 201 });
}
