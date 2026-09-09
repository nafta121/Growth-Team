import Link from "next/link";

export default function ProfilePage() {
  return <main className="simple-page"><header className="detail-header"><Link href="/" aria-label="Kembali">‹</Link><span>Profil</span><span /></header><section className="page-content profile-content"><span className="profile profile-large">AS</span><h1>Ardi Saputra</h1><p className="subtitle">Fasilitator Outbound Madiun</p></section></main>;
}
