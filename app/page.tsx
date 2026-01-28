import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/icons/logo.svg";
import musicSearch from "../public/images/icons/music_search.svg";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Image src={logo} alt="ロゴ" />
      </h1>
      <div className={styles.countDownArea}>
        <p>現在カウントダウンは設定されておりません</p>
      </div>
      <div className={styles.otherWrap}>
        <button className={styles.noteWrap}>
          <h2>シール帳</h2>
          <p>日々の学習をシールで記録</p>
        </button>
      </div>
      <Link href="/search" className={styles.searchBtn}>
        <Image src={musicSearch} alt="曲を探すアイコン" />
        曲を学ぶ
      </Link>
    </div>
  );
}
