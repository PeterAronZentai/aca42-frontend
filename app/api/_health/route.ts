import { NextRequest, NextResponse } from "next/server";

let status: number = 200;
export async function GET(request: NextRequest) {
  // this is a hack to allow us to change the status code
  status = parseInt(request.nextUrl.searchParams.get("status") ?? '' + status, 10)
  console.log(`GET /api/_health => ${status}`);
  return NextResponse.json({ status }, { status });
}



