import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: any) {
  // console.log(req);

  const payLoad = await req.json();
  // console.log(payLoad);
  if (!payLoad.name || !payLoad.age || !payLoad.email) {
    return NextResponse.json(
      { result: "require field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}
