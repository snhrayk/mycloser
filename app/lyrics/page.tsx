import { PrismaClient } from "@prisma/client";
import LyricsClient from "./LyricsClient";

const prisma = new PrismaClient();

type Props = {
  searchParams: {
    title?: string;
    artist?: string;
    image?: string;
    id?: string;
  };
};

export default async function LyricsServer({ searchParams }: Props) {
  // idが指定されている場合はそれを使用、なければtitleで検索
  let song;

  if (searchParams.id) {
    const songId = parseInt(searchParams.id, 10);
    song = await prisma.song.findUnique({
      where: { id: songId },
      include: {
        phrases: {
          orderBy: { order: "asc" },
        },
      },
    });
  } else if (searchParams.title) {
    // タイトルで検索（データベースに該当曲があれば取得）
    song = await prisma.song.findFirst({
      where: {
        title: {
          contains: searchParams.title,
        },
      },
      include: {
        phrases: {
          orderBy: { order: "asc" },
        },
      },
    });
  } else {
    // デフォルトで最初の曲を取得
    song = await prisma.song.findFirst({
      include: {
        phrases: {
          orderBy: { order: "asc" },
        },
      },
    });
  }

  if (!song) {
    return <div>曲が見つかりません</div>;
  }

  return <LyricsClient song={song} searchParams={searchParams} />;
}
