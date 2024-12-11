import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req: any, res: any) {
  console.log(res);

  const userData = users.filter((item) => item.id === res.params.id);
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
