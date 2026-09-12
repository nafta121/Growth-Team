import Link from "next/link";

export default function RundownPage() {
  return <main className="simple-page"><header className="detail-header"><Link href="/" aria-label="Kembali">‹</Link><span>Rundown</span><span /></header><section className="page-content"><p className="eyebrow">RUNNING ORDER</p><h1>Pilih acara</h1><p className="subtitle">Buka acara untuk melihat susunan kegiatan dan sesi yang sedang berlangsung.</p><Link className="primary-link" href="/acara/outbound-leadership">Lihat rundown hari ini</Link></section></main>;
}
