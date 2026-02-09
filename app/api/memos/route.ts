export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// メモ一覧取得（特定の曲のメモを取得）
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const songId = searchParams.get("songId");

    if (!songId) {
      return NextResponse.json(
        { error: "songId is required" },
        { status: 400 },
      );
    }

    const memos = await prisma.phraseMemo.findMany({
      where: {
        phrase: {
          songId: parseInt(songId),
        },
      },
      select: {
        id: true,
        phraseId: true,
        memoText: true,
        createdAt: true,
        updatedAt: true,
      },
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

// メモ作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phraseId, memoText } = body;

    if (!phraseId || memoText === undefined) {
      return NextResponse.json(
        { error: "phraseId and memoText are required" },
        { status: 400 },
      );
    }

    const memo = await prisma.phraseMemo.upsert({
      where: { phraseId: parseInt(phraseId) },
      update: { memoText },
      create: {
        phraseId: parseInt(phraseId),
        memoText,
      },
    });

    return NextResponse.json(memo);
  } catch (error) {
    console.error("Error creating memo:", error);
    return NextResponse.json(
      {
        error: "Failed to create memo",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

// メモ削除
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const phraseId = searchParams.get("phraseId");

    if (!phraseId) {
      return NextResponse.json(
        { error: "phraseId is required" },
        { status: 400 },
      );
    }

    await prisma.phraseMemo.delete({
      where: { phraseId: parseInt(phraseId) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting memo:", error);
    return NextResponse.json(
      { error: "Failed to delete memo" },
      { status: 500 },
    );
  }
}
