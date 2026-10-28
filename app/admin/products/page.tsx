import Link from "next/link";
import { DashboardLayout } from "../../components";
import { formatRupiah, products } from "../../../lib/products";

export const instant = false;

export default async function AdminProductsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page || 1));
  const pageSize = 4;
  const totalPages = Math.ceil(products.length / pageSize);
  const visible = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return <DashboardLayout role="admin" title="Daftar Produk" subtitle="Kelola katalog produk Anda">
    <div className="toolbar"><div style={{display:"flex",gap:10}}><input className="search" placeholder="Cari produk..." /><select className="select"><option>Semua Kategori</option>{Array.from(new Set(products.map(p => p.category))).map(category => <option key={category}>{category}</option>)}</select></div><Link className="btn" href="/products/create">＋ Tambah Produk</Link></div>
    <section className="panel"><div className="table-wrap"><table className="table"><thead><tr><th>Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>{visible.map(p=><tr key={p.id}><td><Link className="product-cell" href={`/products/${p.id}`}><span className="product-thumb" style={{background:p.color}}>▰</span><span><strong>{p.name}</strong><br/><small style={{color:"var(--muted)"}}>{p.id}</small></span></Link></td><td>{p.category}</td><td>{formatRupiah(p.price)}</td><td>{p.stock}</td><td><span className={`badge ${p.status === "Habis" ? "muted" : ""}`}>{p.status}</span></td><td><button className="page-button" aria-label="Detail">•••</button></td></tr>)}</tbody></table></div><div className="pagination"><span>Menampilkan {(currentPage-1)*pageSize+1}-{Math.min(currentPage*pageSize,products.length)} dari {products.length} produk</span><div className="page-buttons">{Array.from({length:totalPages},(_,i)=><Link key={i} className={`page-button ${currentPage===i+1?"active":""}`} href={`/admin/products?page=${i+1}`}>{i+1}</Link>)}</div></div></section>
  </DashboardLayout>;
}
