import Image from "next/image";
import Link from "next/link";
import styles from "../../search/Search.module.scss";

type DeezerTrack = {
  id: number;
  title: string;
  album: {
    title: string;
    cover_medium: string;
  };
  artist: {
    name: string;
    picture_medium: string;
  };
};

type Props = {
  results: DeezerTrack[];
};

export default function SearchResultList({ results }: Props) {
  if (results.length === 0) {
    return <p>検索結果がありません</p>;
  }

  return (
    <div className={styles.searchResults}>
      <h3>{results.length}件の検索結果</h3>
      <ul className={styles.resultList}>
        {results.map((track) => (
          <li key={track.id}>
            <Link
              href={`/lyrics?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist.name)}&image=${encodeURIComponent(track.album.cover_medium)}`}
            >
              <Image
                src={track.album.cover_medium}
                alt={track.album.title}
                width={80}
                height={80}
                className={styles.resultSongImg}
              />
              <p className={styles.songTtl}>{track.title}</p>
              <p className={styles.artistName}>{track.artist.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
