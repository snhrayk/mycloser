import styles from "./MemoModal.module.scss";

type Phrase = {
  id: number;
  section: string;
  lyricEn: string;
  lyricJa: string;
};

type Props = {
  show: boolean;
  selectedPhrase: Phrase | undefined;
  memoText: string;
  hasExistingMemo: boolean;
  onMemoTextChange: (text: string) => void;
  onSave: () => void;
  onDelete: () => void;
  onClose: () => void;
};

export default function MemoModal({
  show,
  selectedPhrase,
  memoText,
  hasExistingMemo,
  onMemoTextChange,
  onSave,
  onDelete,
  onClose,
}: Props) {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.memoModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        {selectedPhrase && (
          <div className={styles.memoModalHeader}>
            <p className={styles.selectedLyric}>{selectedPhrase.lyricEn}</p>
            <p className={styles.selectedTranslation}>
              {selectedPhrase.lyricJa}
            </p>
          </div>
        )}
        <textarea
          className={styles.memoTextarea}
          value={memoText}
          onChange={(e) => onMemoTextChange(e.target.value)}
          placeholder="このフレーズについてのメモを入力..."
          autoFocus
        />
        <div className={styles.memoModalButtons}>
          {hasExistingMemo ? (
            // 削除ボタンがある場合
            <>
              <button className={styles.memoDeleteBtn} onClick={onDelete}>
                メモを削除
              </button>
              <button className={styles.memoSaveBtn} onClick={onSave}>
                更新
              </button>
            </>
          ) : (
            // 新規メモの場合
            <button className={styles.memoSaveBtn} onClick={onSave}>
              保存
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
