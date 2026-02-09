import { PrismaClient } from "@prisma/client";
import LyricsClient from "./LyricsClient";
import { Suspense } from "react";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function LyricsServer() {
  const song = await prisma.song.findUnique({
    where: {
      id: 1,
    },
    include: {
      phrases: {
        orderBy: { order: "asc" },
      },
      sections: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!song) {
    return <div>曲が見つかりません</div>;
  }

  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <LyricsClient song={song} />
    </Suspense>
  );
}
