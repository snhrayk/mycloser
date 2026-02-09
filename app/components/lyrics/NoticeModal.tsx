import styles from "./NoticeModal.module.scss";

type NoticeModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function NoticeModal({ show, onClose }: NoticeModalProps) {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>ご注意</h2>
        <p className={styles.modalText}>
          実際の歌詞の取得が難しいため、代わりに
          <span>AIが生成した歌詞</span>
          を表示しています。そのため、内容が実際の歌詞と異なります。
        </p>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
}
