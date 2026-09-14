import Link from "next/link";

const events = ["Outbound Leadership", "Team Building", "Fun Games Karyawan"];
const eventIds = ["outbound-leadership", "team-building", "fun-games-karyawan"];

export default function EventsPage() {
  return <main className="simple-page"><header className="detail-header"><Link href="/" aria-label="Kembali">‹</Link><span>Semua acara</span><span /></header><section className="page-content"><p className="eyebrow">JADWAL</p><h1>Acara mendatang</h1><div className="simple-list">{events.map((event, index) => <Link href={`/acara/${eventIds[index]}`} key={event}><span>{event}</span><b>›</b></Link>)}</div></section></main>;
}
