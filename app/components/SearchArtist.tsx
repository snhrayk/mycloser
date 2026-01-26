import Image from "next/image";
import styles from "../search/Search.module.scss";
import search from "../../public/images/icons/search.svg";

export default function SearchArtist() {
  return (
    <div className={`${styles.searchWrap} ${styles.searchArtist}`}>
      <div className={styles.searchBar}>
        <Image src={search} alt="検索アイコン" />
        <input type="text" placeholder="アーティスト名または曲名で検索" />
      </div>
      <div className={styles.history}>
        <h3>最近学んだ曲</h3>
        <ul className={styles.historyList}>
          <li>
            {/* <Image src="" alt="" className={styles.songImg} /> */}
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
          <li>
            {/* <Image src="" alt="" className={styles.songImg} /> */}
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
          <li>
            {/* <Image src="" alt="" className={styles.songImg} /> */}
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
        </ul>
      </div>
      {/* <div className={styles.searchResults}>
        <h3>1件の検索結果</h3>
        <ul className={styles.resultList}>
          <li>
            <Image src="" alt="" className={styles.resultSongImg} />
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
          <li>
            <Image src="" alt="" className={styles.resultSongImg} />
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
          <li>
            <Image src="" alt="" className={styles.resultSongImg} />
            <p className={styles.songTtl}>曲のタイトル</p>
            <p className={styles.artistName}>アーティスト名</p>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
