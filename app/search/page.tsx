"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import artist from "../../public/images/icons/artist.svg";
import star from "../../public/images/icons/levels.svg";
import SearchArtist from "../components/Search/SearchArtist";
import SearchLevel from "../components/Search/SearchLevel";
import backMain from "../../public/images/icons/back_main.svg";
import Link from "next/link";

type TabType = "artist" | "level";

export default function Search() {
  const [activeTab, setActiveTab] = useState<TabType>("artist");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${isInputFocused ? styles.hidden : ""}`}
      >
        <Link href="/">
          <Image src={backMain} alt="戻るボタン" />
        </Link>
        <h1>曲を学ぶ</h1>
      </header>
      <main>
        <div className={styles.tabWrapper}>
          {/* 上のタブ部分 */}
          <div
            className={`${styles.tabs} ${isInputFocused ? styles.hidden : ""}`}
          >
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
          <div
            className={`${styles.searchWrap} ${isInputFocused ? styles.focused : ""}`}
          >
            {activeTab === "artist" && (
              <SearchArtist onFocusChange={setIsInputFocused} />
            )}
            {activeTab === "level" && <SearchLevel />}
          </div>
        </div>
      </main>
    </div>
  );
}
