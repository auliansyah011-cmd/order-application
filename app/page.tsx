import Link from "next/link";
import { Logo } from "./components";

export default function Home() {
  return (
    <div className="home-page">
      <nav className="home-nav">
        <Logo />
        <div className="home-links"><Link href="/login">Masuk</Link><Link href="/register">Daftar</Link></div>
      </nav>
      <main className="home-hero">
        <div>
          <h1>Kelola pesanan <span>lebih mudah.</span></h1>
          <p>OrderApp membantu tim Anda mengelola produk, pesanan, dan pelanggan dari satu dashboard yang sederhana.</p>
          <Link className="btn" href="/login">Mulai Sekarang →</Link>
        </div>
        <div className="hero-card"><div className="hero-card-inner"><strong>Ringkasan Toko</strong></div></div>
      </main>
    </div>
  );
}
