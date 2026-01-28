import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// メモの更新
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: "content is required" },
        { status: 400 },
      );
    }

    const memo = await prisma.phraseMemo.update({
      where: { id: parseInt(params.id) },
      data: { content },
    });

    return NextResponse.json(memo);
  } catch (error) {
    console.error("Error updating memo:", error);
    return NextResponse.json(
      { error: "Failed to update memo" },
      { status: 500 },
    );
  }
}

// メモの削除
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.phraseMemo.delete({
      where: { id: parseInt(params.id) },
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
