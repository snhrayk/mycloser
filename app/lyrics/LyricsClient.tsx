"use client";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./Lyrics.module.scss";
import backBtn from "../../public/images/icons/back.svg";
import nextBtn from "../../public/images/icons/next.svg";
import memo from "../../public/images/icons/memo.svg";
import { MarqueeText } from "../components/lyrics/MarqueeText";
import MemoModal from "../components/lyrics/MemoModal";
import NoticeModal from "../components/lyrics/NoticeModal";
import { useMemoManager } from "../components/lyrics/useMemoManager";
import { useState, useMemo } from "react";

type Props = {
  song: {
    phrases: {
      id: number;
      section: string;
      lyricEn: string;
      lyricJa: string;
    }[];
    sections: {
      id: number;
      section: string;
      background: string;
      order: number;
    }[];
  };
};

export default function Lyrics({ song }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get("title") || "曲名";
  const artist = searchParams.get("artist") || "アーティスト名";
  const image = searchParams.get("image") || "";

  const [showOriginal, setShowOriginal] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isExplainExpanded, setIsExplainExpanded] = useState(false);

  // メモ機能
  const {
    memos,
    showMemoModal,
    selectedPhraseId,
    memoText,
    setMemoText,
    handleTouchStart,
    handleTouchEnd,
    handleSaveMemo,
    handleDeleteMemo,
    handleCloseMemoModal,
  } = useMemoManager(song.phrases[0]?.id);

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  // セクションごとにフレーズをグループ化
  const sections = useMemo(() => {
    const grouped: { section: string; phrases: typeof song.phrases }[] = [];
    song.phrases.forEach((phrase) => {
      const lastSection = grouped[grouped.length - 1];
      if (lastSection && lastSection.section === phrase.section) {
        lastSection.phrases.push(phrase);
      } else {
        grouped.push({ section: phrase.section, phrases: [phrase] });
      }
    });
    return grouped;
  }, [song.phrases]);

  const currentSection = sections[currentPageIndex];
  const totalPages = sections.length;

  // 現在のセクションの背景情報を取得
  const currentSectionBackground =
    song.sections.find((s) => s.section === currentSection?.section)
      ?.background || "";

  // 選択されたフレーズを取得
  const selectedPhrase = song.phrases.find((p) => p.id === selectedPhraseId);

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const containerStyle = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div className={styles.container} style={containerStyle}>
      <NoticeModal show={showModal} onClose={() => setShowModal(false)} />
      <MemoModal
        show={showMemoModal}
        selectedPhrase={song.phrases.find((p) => p.id === selectedPhraseId)}
        memoText={memoText}
        hasExistingMemo={!!memos[selectedPhraseId!]}
        onMemoTextChange={setMemoText}
        onSave={handleSaveMemo}
        onDelete={handleDeleteMemo}
        onClose={handleCloseMemoModal}
      />
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          <Image src={backBtn} alt="戻るボタン" />
        </button>
        <div className={styles.songInfo}>
          <MarqueeText text={title} fontSize="2.4rem" fontWeight="bolder" />
          <MarqueeText text={artist} fontSize="1.6rem" fontWeight="medium" />
        </div>
        <div className={styles.toggleBtnWrap}>
          <label className={styles.toggleBtn}>
            <input
              type="checkbox"
              checked={showOriginal}
              onChange={(e) => setShowOriginal(e.target.checked)}
            />
            <span className={styles.toggleText}></span>
            <span className={styles.toggleCircle}></span>
            <span className={styles.labelText}>原文</span>
          </label>
          <label className={styles.toggleBtn}>
            <input
              type="checkbox"
              checked={showTranslation}
              onChange={(e) => setShowTranslation(e.target.checked)}
            />
            <span className={styles.toggleText}></span>
            <span className={styles.toggleCircle}></span>
            <span className={styles.labelText}>和訳</span>
          </label>
        </div>
      </header>
      <main className={styles.main}>
        <div key={currentPageIndex} className={styles.lyricsWrap}>
          <h3 className={styles.lyricsTitle}>[{currentSection?.section}]</h3>
          <ul className={styles.lyricsList}>
            {currentSection?.phrases.map((p) => (
              <li
                key={p.id}
                className={`${styles.lyrics} ${memos[p.id] ? styles.hasMemo : ""}`}
                onTouchStart={() => handleTouchStart(p.id)}
                onTouchEnd={handleTouchEnd}
                onMouseDown={() => handleTouchStart(p.id)}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
              >
                <div className={styles.lyricsContent}>
                  <div>
                    {showOriginal && (
                      <p className={styles.lyricsText}>{p.lyricEn}</p>
                    )}
                    {showTranslation && (
                      <p className={styles.translation}>{p.lyricJa}</p>
                    )}
                  </div>
                  {memos[p.id] && (
                    <div className={styles.memoIcon} title="メモあり">
                      <Image src={memo} alt="メモアイコン" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={styles.lyricsExplain}
          style={{ height: isExplainExpanded ? "65dvh" : "4.8rem" }}
        >
          <h4
            onClick={() => setIsExplainExpanded(!isExplainExpanded)}
            style={{ cursor: "pointer" }}
          >
            {currentSection?.section}の解説
          </h4>
          {isExplainExpanded && (
            <p style={{ whiteSpace: "pre-wrap" }}>{currentSectionBackground}</p>
          )}
        </div>
        <div className={styles.pageNation}>
          <button
            onClick={goToPrevPage}
            disabled={currentPageIndex === 0}
            style={{ opacity: currentPageIndex === 0 ? 0.5 : 1 }}
          >
            <Image src={backBtn} alt="前へボタン" />
          </button>
          <span>
            {currentPageIndex + 1}/{totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPageIndex === totalPages - 1}
            style={{ opacity: currentPageIndex === totalPages - 1 ? 0.5 : 1 }}
          >
            <Image src={nextBtn} alt="次へボタン" />
          </button>
        </div>
      </main>
    </div>
  );
}
