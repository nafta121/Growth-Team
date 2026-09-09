const upcomingEvents = [
  { date: "12", month: "JUN", title: "Outbound Leadership", client: "PT Maju Bersama", time: "07.00 WIB", place: "Taman Rekreasi Umbul", facilitators: ["AS", "RP", "DN"] },
  { date: "15", month: "JUN", title: "Team Building", client: "CV Karya Mandiri", time: "08.00 WIB", place: "Ngrowo Bening", facilitators: ["FA", "IW"] },
  { date: "22", month: "JUN", title: "Fun Games Karyawan", client: "Dinas Pendidikan Madiun", time: "07.30 WIB", place: "Wana Wisata Grape", facilitators: ["AS", "FA", "YK"] },
];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">O</span><span>Outbound <b>Madiun</b></span></div>
        <button className="profile" aria-label="Buka profil fasilitator">AS</button>
      </header>

      <section className="hero">
        <p className="eyebrow">JADWAL FASILITATOR</p>
        <h1>Selamat pagi, Ardi <span aria-hidden="true">👋</span></h1>
        <p className="subtitle">Berikut acara yang akan datang untuk tim Anda.</p>
      </section>

      <section className="events" aria-labelledby="upcoming-title">
        <div className="section-heading">
          <h2 id="upcoming-title">Acara terdekat</h2>
          <button className="link-button">Lihat semua <span aria-hidden="true">→</span></button>
        </div>
        <div className="event-list">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={`${event.date}-${event.title}`}>
              <div className="date-badge"><strong>{event.date}</strong><span>{event.month}</span></div>
              <div className="event-info">
                <p className="event-title">{event.title}</p>
                <p className="client">{event.client}</p>
                <div className="event-meta"><span>◷ {event.time}</span><span>⌖ {event.place}</span></div>
              </div>
              <div className="facilitators" aria-label={`${event.facilitators.length} fasilitator`}>
                {event.facilitators.map((initials, index) => <span className="avatar" key={initials} style={{ zIndex: event.facilitators.length - index }}>{initials}</span>)}
              </div>
              <span className="chevron" aria-hidden="true">›</span>
            </article>
          ))}
        </div>
      </section>

      <nav className="bottom-nav" aria-label="Navigasi utama">
        <a className="active" href="#acara"><span>▣</span>Acara</a>
        <a href="#rundown"><span>☷</span>Rundown</a>
        <a href="#chat"><span>◌</span>Chat</a>
      </nav>
    </main>
  );
}
