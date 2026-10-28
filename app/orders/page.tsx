import { DashboardLayout } from "../components";
import { formatRupiah } from "../../lib/products";

const orders = [
  { id: "ORD-2026-0842", date: "28 Okt 2026", items: 2, total: 970000, status: "Diproses" },
  { id: "ORD-2026-0831", date: "24 Okt 2026", items: 1, total: 1250000, status: "Dikirim" },
  { id: "ORD-2026-0798", date: "18 Okt 2026", items: 3, total: 425000, status: "Selesai" },
  { id: "ORD-2026-0784", date: "15 Okt 2026", items: 1, total: 850000, status: "Selesai" },
  { id: "ORD-2026-0762", date: "10 Okt 2026", items: 2, total: 590000, status: "Selesai" },
];

export default function UserOrdersPage() {
  return <DashboardLayout title="Pesanan Saya" subtitle="Kelola dan pantau pesanan Anda">
    <div className="stats-grid orders-stats">
      <div className="stat-card"><div><small>Pesanan Aktif</small><strong>3</strong><div className="trend">1 pesanan dikirim</div></div><div className="stat-icon">▣</div></div>
      <div className="stat-card"><div><small>Pesanan Selesai</small><strong>48</strong><div className="trend">+12 bulan ini</div></div><div className="stat-icon">✓</div></div>
      <div className="stat-card"><div><small>Pesanan Terakhir</small><strong>0842</strong><div className="trend">28 Oktober 2026</div></div><div className="stat-icon">◷</div></div>
    </div>

    <section className="panel"><div className="panel-header"><h2>Daftar Pesanan</h2><select className="select" aria-label="Filter status"><option>Semua Status</option><option>Diproses</option><option>Dikirim</option><option>Selesai</option></select></div><div className="table-wrap"><table className="table"><thead><tr><th>No. Pesanan</th><th>Tanggal</th><th>Jumlah Produk</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>{orders.map(order => <tr key={order.id}><td><strong>{order.id}</strong></td><td>{order.date}</td><td>{order.items} produk</td><td>{formatRupiah(order.total)}</td><td><span className={`badge ${order.status === "Selesai" ? "" : "muted"}`}>{order.status}</span></td><td><button className="page-button" aria-label="Lihat detail pesanan">›</button></td></tr>)}</tbody></table></div></section>
  </DashboardLayout>;
}
