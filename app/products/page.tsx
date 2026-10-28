import Link from "next/link";
import { DashboardLayout } from "../components";
import { formatRupiah, products } from "../../lib/products";

export const instant = false;

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page || 1));
  const pageSize = 4;
  const totalPages = Math.ceil(products.length / pageSize);
  const visible = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return <DashboardLayout role="user" title="Daftar Produk" subtitle="Pilihan produk yang tersedia untuk Anda">
    <div className="toolbar"><div style={{display:"flex",gap:10}}><input className="search" placeholder="Cari produk..." /><select className="select"><option>Semua Kategori</option>{Array.from(new Set(products.map(p => p.category))).map(category => <option key={category}>{category}</option>)}</select></div></div>
    <section className="panel catalog-panel"><div className="user-product-grid">{visible.map(product => <article className="user-product-card" key={product.id}><Link href={`/products/${product.id}`}><div className="user-product-image" style={{background:product.color}}><span>▰</span><span className={`badge ${product.status === "Habis" ? "muted" : ""}`}>{product.status}</span></div><div className="user-product-body"><small>{product.category}</small><h3>{product.name}</h3><strong>{formatRupiah(product.price)}</strong></div></Link></article>)}</div><div className="pagination"><span>Menampilkan {(currentPage-1)*pageSize+1}-{Math.min(currentPage*pageSize,products.length)} dari {products.length} produk</span><div className="page-buttons">{Array.from({length:totalPages},(_,i)=><Link key={i} className={`page-button ${currentPage===i+1?"active":""}`} href={`/products?page=${i+1}`}>{i+1}</Link>)}</div></div></section>
  </DashboardLayout>;
}
