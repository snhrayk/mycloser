import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// メモの取得（phraseId指定）
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const phraseId = searchParams.get("phraseId");

    if (!phraseId) {
      return NextResponse.json(
        { error: "phraseId is required" },
        { status: 400 },
      );
    }

    const memos = await prisma.phraseMemo.findMany({
      where: { phraseId: parseInt(phraseId) },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(memos);
  } catch (error) {
    console.error("Error fetching memos:", error);
    return NextResponse.json(
      { error: "Failed to fetch memos" },
      { status: 500 },
    );
  }
}

// メモの作成
export async function POST(request: NextRequest) {
  try {
    const { phraseId, content } = await request.json();

    if (!phraseId || !content) {
      return NextResponse.json(
        { error: "phraseId and content are required" },
        { status: 400 },
      );
    }

    const memo = await prisma.phraseMemo.create({
      data: {
        phraseId: parseInt(phraseId),
        content,
      },
    });

    return NextResponse.json(memo);
  } catch (error) {
    console.error("Error creating memo:", error);
    return NextResponse.json(
      { error: "Failed to create memo" },
      { status: 500 },
    );
  }
}
