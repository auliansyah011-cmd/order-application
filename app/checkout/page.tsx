import Link from "next/link";
import { DashboardLayout } from "../components";
import { formatRupiah, products } from "../../lib/products";

export default function CheckoutPage() {
  const cart = products.slice(0, 3);
  const subtotal = 970000;
  const shipping = 20000;
  const total = subtotal + shipping;
  return <DashboardLayout title="Checkout Produk" subtitle="Tinjau dan selesaikan pembayaran Anda">
    <div className="checkout-layout">
      <section className="panel"><div className="panel-header"><h2>Produk di Keranjang</h2><span className="badge">{cart.length} produk</span></div><div className="checkout-products">{cart.map((product, index) => <div className="checkout-product" key={product.id}><span className="product-thumb" style={{background:product.color}}>▰</span><div className="checkout-product-name"><strong>{product.name}</strong><small>{product.category}</small></div><div className="quantity"><button aria-label="Kurangi">−</button><span>{index === 0 ? 2 : 1}</span><button aria-label="Tambah">＋</button></div><strong>{formatRupiah(index === 0 ? product.price * 2 : product.price)}</strong></div>)}</div></section>
      <aside className="panel checkout-summary"><div className="panel-header"><h2>Ringkasan Belanja</h2></div><div className="summary-body"><div className="stat-card summary-total"><div><small>Total Belanja</small><strong>{formatRupiah(5200000)}</strong><div className="trend">+5% bulan ini</div></div><div className="stat-icon">◉</div></div><div className="summary-line"><span>Subtotal saat ini</span><strong>{formatRupiah(subtotal)}</strong></div><div className="summary-line"><span>Ongkos kirim</span><strong>{formatRupiah(shipping)}</strong></div><div className="summary-line summary-grand"><span>Total Pembayaran</span><strong>{formatRupiah(total)}</strong></div><button className="btn checkout-button">Checkout Sekarang</button><Link className="btn secondary checkout-button" href="/products">Lanjut Belanja</Link></div></aside>
    </div>
  </DashboardLayout>;
}
