"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import artist from "../../public/images/icons/artist.svg";
import star from "../../public/images/icons/levels.svg";
import SearchArtist from "../components/SearchArtist";
import SearchLevel from "../components/SearchLevel";

type TabType = "artist" | "level";

export default function Search() {
  const [activeTab, setActiveTab] = useState<TabType>("artist");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>曲を学ぶ</h1>
      </header>
      <main>
        <div className={styles.tabWrapper}>
          {/* 上のタブ部分 */}
          <div className={styles.tabs}>
            <button
              onClick={() => setActiveTab("artist")}
              className={`${styles.tab} ${styles.artist} ${
                activeTab === "artist" ? styles.active : ""
              }`}
            >
              <Image src={artist} alt="アーティストのアイコン" />
              アーティストor曲名
            </button>
            <button
              onClick={() => setActiveTab("level")}
              className={`${styles.tab} ${styles.level} ${
                activeTab === "level" ? styles.active : ""
              }`}
            >
              <Image src={star} alt="星のアイコン" />
              英語難易度別
            </button>
          </div>
          {/* タブの中身 */}
          {activeTab === "artist" && <SearchArtist />}
          {activeTab === "level" && <SearchLevel />}
        </div>
      </main>
    </div>
  );
}
