import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req: any, content: any) {
  // console.log(content.params);

  const userData = users.filter((item) => item.id == content.params.id);
  // return NextResponse.json({ result: true });
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function POST(req: any) {
  const payLoad = await req.json();
  // console.log(payLoad);
  if (!payLoad.id || !payLoad.name || !payLoad.email || !payLoad.age) {
    return NextResponse.json(
      { result: "request data is missing", success: false },
      { status: 400 }
    );
  } else {
  }

  return NextResponse.json({ result: payLoad, success: true }, { status: 200 });
}

export async function PUT(req: any, content: any) {
  const payLoad = await req.json();
  payLoad.id = content.params.id;
  // console.log(payLoad);
  // console.log(content.params.id);

  if (!payLoad.id || !payLoad.name || !payLoad.age || !payLoad.email) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { result: payLoad, success: false },
      { status: 201 }
    );
  }
}

export function DELETE(req: any, content: any) {
  const id = content.params.id;
  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal Error, Please try after sometimes", success: false },
      { status: 400 }
    );
  }
}
