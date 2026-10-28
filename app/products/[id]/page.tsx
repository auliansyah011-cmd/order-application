import Link from "next/link";
import { DashboardLayout } from "../../components";
import { products, formatRupiah } from "../../../lib/products";

export const instant = false;

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id) || products[0];
  return <DashboardLayout role="user" title="Detail Produk" subtitle="Informasi lengkap produk">
    <div className="detail-layout"><div className="detail-image panel" style={{background:product.color}}>▰</div><section className="panel detail-info"><span className={`badge ${product.status === "Habis" ? "muted" : ""}`}>{product.status}</span><h2 style={{marginTop:16}}>{product.name}</h2><div className="sku">SKU: {product.id} · {product.category}</div><div className="detail-price">{formatRupiah(product.price)}</div><p className="detail-description">{product.description}</p><div className="info-grid"><div><small>Kategori</small><strong>{product.category}</strong></div><div><small>Stok tersedia</small><strong>{product.stock} unit</strong></div></div><div className="detail-actions"><Link className="btn" href="/checkout">Tambah ke Checkout</Link><Link className="btn secondary" href="/products">Kembali</Link></div></section></div>
  </DashboardLayout>;
}
