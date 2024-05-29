import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") ?? "World";
  return new Response(`Hello, ${name}`, {
    status: 200,
  });
}
