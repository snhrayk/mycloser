import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>ホーム画面</h1>
      <Link href="/search">曲を探す</Link>
    </>
  );
}
