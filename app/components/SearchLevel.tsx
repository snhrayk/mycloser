import styles from "../search/Search.module.scss";
import Levels from "../data/levels";

export default function SearchLevel() {
  return (
    <div className={`${styles.searchWrap} ${styles.searchLevel}`}>
      <p className={styles.levelDescription}>
        あなたの英語レベルに合わせて曲を学べます
      </p>
      <ul className={styles.levelList}>
        {Levels.map((level) => (
          <li key={level.id} className={styles.levelBtn}>
            <div className={styles.levelInfo}>
              <p className={styles.levelName}>{level.name}</p>
              <p className={styles.rate}>{level.rate}</p>
            </div>
            <p className={styles.levelDesc}>{level.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
