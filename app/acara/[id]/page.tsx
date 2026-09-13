export const runtime = 'edge';

const rundown: [string, string, string, boolean?][] = [
  ["06.30", "Persiapan fasilitator", "Koordinasi alat, safety check, dan pembagian peran"],
  ["07.00", "Registrasi peserta", "Penyambutan peserta dan pembagian kelompok"],
  ["07.30", "Pembukaan", "Sambutan, briefing kegiatan, dan ice breaking"],
  ["08.15", "Sesi Leadership Challenge", "Permainan inti untuk membangun kolaborasi tim", true],
  ["10.00", "Istirahat", "Snack, minum, dan persiapan sesi berikutnya"],
];

export default function EventDetail() {
  return <main className="detail-page">
    <header className="detail-header"><a href="/" aria-label="Kembali ke daftar acara">‹</a><span>Detail acara</span><button aria-label="Bagikan acara">⋯</button></header>
    <section className="event-cover"><p>12 JUNI 2026</p><h1>Outbound<br />Leadership</h1><span>PT Maju Bersama</span></section>
    <section className="detail-content">
      <div className="quick-info"><div><b>◷</b><span>Mulai<br /><strong>07.00 WIB</strong></span></div><div><b>⌖</b><span>Lokasi<br /><strong>Taman Rekreasi Umbul</strong></span></div></div>
      <div className="detail-title"><div><p className="eyebrow">RUNNING ORDER</p><h2>Rundown acara</h2></div><button className="download">⇩ Unduh</button></div>
      <ol className="timeline">{rundown.map(([time, title, description, isActive]) => <li className={isActive ? "active-session" : ""} key={time}><time>{time}</time><span className="timeline-dot" /><div><h3>{title}{isActive && <span className="live-badge">Sedang berlangsung</span>}</h3><p>{description}</p></div></li>)}</ol>
    </section>
  </main>;
}
