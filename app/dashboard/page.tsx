import Link from "next/link";
import { DashboardLayout } from "../components";
import { formatRupiah, products } from "../../lib/products";

export default function UserDashboard() {
  return <DashboardLayout title="Dashboard User" subtitle="Selamat datang kembali, Andi">
    <section className="dashboard-welcome panel">
      <div><small>Belanja Hari Ini</small><h2>Temukan produk pilihan Anda</h2><p>Beragam kategori produk tersedia, langsung dari katalog admin OrderApp.</p><Link className="btn" href="/products">Lihat Semua Produk</Link></div>
      <div className="welcome-icon">▰</div>
    </section>

    <section className="panel catalog-panel">
      <div className="panel-header"><h2>Katalog Produk</h2><Link href="/products">Lihat semua produk</Link></div>
      <div className="user-product-grid">{products.map(product => <article className="user-product-card" key={product.id}><Link href={`/products/${product.id}`}><div className="user-product-image" style={{ background: product.color }}><span>▰</span><span className={`badge ${product.status === "Habis" ? "muted" : ""}`}>{product.status}</span></div><div className="user-product-body"><small>{product.category}</small><h3>{product.name}</h3><strong>{formatRupiah(product.price)}</strong></div></Link></article>)}</div>
    </section>
  </DashboardLayout>;
}
