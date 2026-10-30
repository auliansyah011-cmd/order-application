import Link from "next/link";
import { Logo } from "./components";

const services = [
  { icon: "📱", name: "Pulsa Nasional", detail: "Semua operator" },
  { icon: "🚗", name: "e-Toll", detail: "Top up elektronik" },
  { icon: "💳", name: "e-Wallet", detail: "Isi saldo digital" },
  { icon: "⚡", name: "Token PLN", detail: "Listrik prabayar" },
];

export default function Home() {
  return (
    <div className="home-page">
      <nav className="home-nav">
        <Logo />
        <div className="home-links"><Link href="/login">Masuk</Link><Link className="home-register" href="/register">Daftar Gratis</Link></div>
      </nav>

      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Belanja & Bayar Lebih Mudah</span>
            <h1>Semua kebutuhan digital dalam <span>satu aplikasi.</span></h1>
            <p>Isi pulsa, top up e-Wallet, beli token listrik, dan transaksi digital lainnya dengan cepat, aman, dan praktis.</p>
            <div className="home-actions"><Link className="btn home-primary-action" href="/login">Mulai Sekarang →</Link><Link className="btn secondary" href="/dashboard">Lihat Dashboard</Link></div>
            <div className="home-trust"><span><strong>24/7</strong> Transaksi Aktif</span><span><strong>100%</strong> Aman & Terpercaya</span></div>
          </div>

          <div className="hero-showcase" aria-label="Ringkasan layanan OrderApp">
            <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
            <div className="hero-dashboard-card">
              <div className="hero-dashboard-header"><div><small>Saldo OrderApp</small><strong>Rp 1.250.000</strong></div><span className="hero-avatar">AR</span></div>
              <div className="hero-service-grid">
                {services.map((service) => <div className="hero-service-item" key={service.name}><span>{service.icon}</span><strong>{service.name}</strong><small>{service.detail}</small></div>)}
              </div>
              <div className="hero-activity"><span>Transaksi terakhir</span><strong>Berhasil</strong></div>
            </div>
          </div>
        </section>

        <section className="home-services" aria-label="Layanan populer">
          <div className="home-services-heading"><div><small>Layanan Populer</small><h2>Pilih transaksi favorit Anda</h2></div><Link href="/login">Lihat semua layanan →</Link></div>
          <div className="home-service-list">
            {services.map((service) => <Link className="home-service-card" href="/login" key={service.name}><span>{service.icon}</span><div><strong>{service.name}</strong><small>{service.detail}</small></div><b>→</b></Link>)}
          </div>
        </section>
      </main>
    </div>
  );
}
