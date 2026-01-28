import styles from "@/app/search/level/Level.module.scss";
import level from "../../data/levels";
import Image from "next/image";
import back from "../../../public/images/icons/back.svg";
import search from "@/public/images/icons/search.svg";

export default function Level() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <button>
            <Image src={back} alt="戻るボタン" />
          </button>
          <h1>{level[0].name}</h1>
          <p>{level[0].rate}</p>
        </div>
        <p className={styles.levelDescription}>{level[0].description}</p>
      </header>
      <main>
        <div className={styles.searchBar}>
          <Image src={search} alt="検索アイコン" />
          <input type="text" placeholder="アーティスト名または曲名で検索" />
        </div>
        <div className={styles.recommendWrap}>
          <h3>おすすめ</h3>
          <ul className={styles.recommendList}>
            <li>
              <Image src="" alt="" className={styles.recommendSongImg} />
              <p className={styles.songTtl}>曲のタイトル</p>
              <p className={styles.artistName}>アーティスト名</p>
            </li>
            <li>
              <Image src="" alt="" className={styles.recommendSongImg} />
              <p className={styles.songTtl}>曲のタイトル</p>
              <p className={styles.artistName}>アーティスト名</p>
            </li>
            <li>
              <Image src="" alt="" className={styles.recommendSongImg} />
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
      </main>
    </div>
  );
}
