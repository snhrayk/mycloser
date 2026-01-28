"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../search/Search.module.scss";
import search from "../../../public/images/icons/search.svg";
import SearchResultList from "./SearchResultList";

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

type SearchArtistProps = {
  onFocusChange?: (focused: boolean) => void;
};

export default function SearchArtist({ onFocusChange }: SearchArtistProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // deezer
  const [results, setResults] = useState<DeezerTrack[]>([]);
  const handleSearch = async () => {
    if (!searchQuery) return;

    const res = await fetch(`/api/search?q=${searchQuery}`);
    const data = await res.json();

    setResults(data.data);
    setShowResults(true);
  };

  return (
    <div className={styles.searchArtist}>
      <div className={styles.searchBar}>
        <Image src={search} alt="検索アイコン" />
        <input
          type="text"
          placeholder="アーティスト名または曲名で検索"
          onFocus={() => {
            setIsFocused(true);
            onFocusChange?.(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            onFocusChange?.(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* {!isFocused && !showResults && (
        <div className={styles.history}>
          <h3>最近学んだ曲</h3>
          <ul className={styles.historyList}>
            <li>
              <Image src="" alt="" className={styles.songImg} />
              <p className={styles.songTtl}>曲のタイトル</p>
              <p className={styles.artistName}>アーティスト名</p>
            </li>
            <li>
              <Image src="" alt="" className={styles.songImg} />
              <p className={styles.songTtl}>曲のタイトル</p>
              <p className={styles.artistName}>アーティスト名</p>
            </li>
            <li>
              <Image src="" alt="" className={styles.songImg} />
              <p className={styles.songTtl}>曲のタイトル</p>
              <p className={styles.artistName}>アーティスト名</p>
            </li>
          </ul>
        </div>
      )} */}
      {showResults && <SearchResultList results={results} />}
    </div>
  );
}
