import Link from "next/link";

export default function ChatPage() {
  return <main className="simple-page"><header className="detail-header"><Link href="/" aria-label="Kembali">‹</Link><span>Chat fasilitator</span><span /></header><section className="page-content empty-state"><span aria-hidden="true">◌</span><h1>Belum ada percakapan</h1><p className="subtitle">Pesan internal fasilitator akan tampil di sini.</p></section></main>;
}
