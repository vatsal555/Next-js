import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req: any, res: any) {
  const userData = users.filter((item) => item.id === res.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}
