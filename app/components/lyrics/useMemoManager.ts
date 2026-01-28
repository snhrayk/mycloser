import { useState, useEffect } from "react";

export function useMemoManager(songId?: number) {
  const [memos, setMemos] = useState<Record<number, string>>({});
  const [showMemoModal, setShowMemoModal] = useState(false);
  const [selectedPhraseId, setSelectedPhraseId] = useState<number | null>(null);
  const [memoText, setMemoText] = useState("");
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(
    null,
  );

  // メモをAPIから読み込む
  useEffect(() => {
    const fetchMemos = async () => {
      if (songId) {
        try {
          const response = await fetch(`/api/memos?songId=${songId}`);
          if (response.ok) {
            const data = await response.json();
            const memosMap: Record<number, string> = {};
            data.forEach((memo: { phraseId: number; memoText: string }) => {
              memosMap[memo.phraseId] = memo.memoText;
            });
            setMemos(memosMap);
          }
        } catch (error) {
          console.error("Failed to fetch memos:", error);
        }
      }
    };
    fetchMemos();
  }, [songId]);

  // 長押し開始
  const handleTouchStart = (phraseId: number) => {
    const timer = setTimeout(() => {
      setSelectedPhraseId(phraseId);
      setMemoText(memos[phraseId] || "");
      setShowMemoModal(true);
    }, 400); // 400ms長押し
    setLongPressTimer(timer);
  };

  // 長押しキャンセル
  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  // メモ保存
  const handleSaveMemo = async () => {
    if (selectedPhraseId === null) return;

    try {
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phraseId: selectedPhraseId,
          memoText: memoText.trim(),
        }),
      });

      if (response.ok) {
        const newMemos = { ...memos };
        if (memoText.trim()) {
          newMemos[selectedPhraseId] = memoText.trim();
        } else {
          delete newMemos[selectedPhraseId];
        }
        setMemos(newMemos);
        handleCloseMemoModal();
      } else {
        const errorData = await response.json();
        console.error("Failed to save memo:", errorData);
        alert(
          `メモの保存に失敗しました: ${errorData.error}${errorData.details ? "\n" + errorData.details : ""}`,
        );
      }
    } catch (error) {
      console.error("Error saving memo:", error);
      alert("メモの保存中にエラーが発生しました");
    }
  };

  // メモ削除
  const handleDeleteMemo = async () => {
    if (selectedPhraseId === null) return;

    try {
      const response = await fetch(`/api/memos?phraseId=${selectedPhraseId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const newMemos = { ...memos };
        delete newMemos[selectedPhraseId];
        setMemos(newMemos);
        handleCloseMemoModal();
      } else {
        console.error("Failed to delete memo");
      }
    } catch (error) {
      console.error("Error deleting memo:", error);
    }
  };

  // メモモーダルを閉じる
  const handleCloseMemoModal = () => {
    setShowMemoModal(false);
    setSelectedPhraseId(null);
    setMemoText("");
  };

  return {
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
  };
}
