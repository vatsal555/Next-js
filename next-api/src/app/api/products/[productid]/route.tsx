import { NextResponse } from "next/server";

export async function PUT(req, content) {
  // console.log(content?.params);
  const filter = content.params.productid;
  //   console.log(filter);

  const result: any = [];
  return NextResponse.json({ result, success: true });
}
