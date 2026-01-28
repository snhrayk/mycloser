import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ data: [] });
  }

  const res = await fetch(
    `https://api.deezer.com/search?q=${encodeURIComponent(q)}`,
  );

  const data = await res.json();
  return NextResponse.json(data);
}
