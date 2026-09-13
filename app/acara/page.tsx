import Link from "next/link";

const events = [
  { title: "Outbound Leadership", slug: "outbound-leadership" },
  { title: "Team Building", slug: "team-building" },
  { title: "Fun Games Karyawan", slug: "fun-games-karyawan" },
];

export default function EventsPage() {
  return (
    <main className="simple-page">
      <header className="detail-header">
        <Link href="/" aria-label="Kembali">‹</Link>
        <span>Semua acara</span>
        <span />
      </header>
      <section className="page-content">
        <p className="eyebrow">JADWAL</p>
        <h1>Acara mendatang</h1>
        <div className="simple-list">
          {events.map((event) => (
            <Link href={`/acara/${event.slug}`} key={event.slug}>
              <span>{event.title}</span>
              <b>›</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
