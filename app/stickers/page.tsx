import styles from "./Stickers.module.scss";

export default function Stickers() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>好きなステッカーを貼ろう!</h1>
        <p>好きなステッカーを貼ろう</p>
      </header>
      <main className={styles.main}>
        <div className={styles.stickerArea}>
          <h2>January 26-30</h2>
        </div>
      </main>
    </div>
  );
}
