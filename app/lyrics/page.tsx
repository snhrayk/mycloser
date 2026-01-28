import { PrismaClient } from "@prisma/client";
import LyricsClient from "./LyricsClient";

const prisma = new PrismaClient();

export default async function LyricsServer() {
  const song = await prisma.song.findUnique({
    where: { id: 1 },
    include: {
      phrases: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!song) {
    return <div>曲が見つかりません</div>;
  }

  return <LyricsClient song={song} />;
}
