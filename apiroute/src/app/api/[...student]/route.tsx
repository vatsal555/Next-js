import { NextResponse } from "next/server";

export async function GET(req: any, content: any) {
  //   console.log(content);
  const studentDetails = content.params.student;
  console.log(studentDetails);

  return NextResponse.json({ result: studentDetails }, { status: 200 });
}
