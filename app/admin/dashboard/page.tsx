import Link from "next/link";
import { DashboardLayout } from "../../components";
import { formatRupiah, products } from "../../../lib/products";

export default function AdminDashboard() {
  return <DashboardLayout role="admin" title="Dashboard Admin" subtitle="Ringkasan operasional toko hari ini">
    <div className="stats-grid">
      <Stat label="Total Produk" value="128" icon="▦" trend="+12 produk baru" /><Stat label="Pesanan Baru" value="24" icon="▣" trend="8 perlu diproses" /><Stat label="Pendapatan" value="Rp 42,8jt" icon="◉" trend="+18% bulan ini" /><Stat label="Pengguna" value="1.842" icon="♙" trend="+6% bulan ini" />
    </div>
    <section className="panel"><div className="panel-header"><h2>Produk Terbaru</h2><Link className="btn" href="/products/create">＋ Tambah Produk</Link></div><div className="table-wrap"><table className="table"><thead><tr><th>Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th><th>Status</th></tr></thead><tbody>{products.slice(0,5).map(p=><tr key={p.id}><td><Link className="product-cell" href={`/products/${p.id}`}><span className="product-thumb" style={{background:p.color}}>▰</span><strong>{p.name}</strong></Link></td><td>{p.category}</td><td>{formatRupiah(p.price)}</td><td>{p.stock}</td><td><span className={`badge ${p.status === "Habis" ? "muted" : ""}`}>{p.status}</span></td></tr>)}</tbody></table></div></section>
  </DashboardLayout>;
}
function Stat({label,value,icon,trend}:{label:string;value:string;icon:string;trend:string}) { return <div className="stat-card"><div><small>{label}</small><strong>{value}</strong><div className="trend">{trend}</div></div><div className="stat-icon">{icon}</div></div>; }
