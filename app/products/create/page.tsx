import Link from "next/link";
import { DashboardLayout } from "../../components";

export default function CreateProductPage() {
  return <DashboardLayout role="admin" title="Tambah Produk" subtitle="Tambahkan produk baru ke katalog">
    <form className="panel form-panel" action="/api/products" method="post">
      <div className="form-panel-body"><div className="form-row"><div className="field"><label htmlFor="name">Nama Produk *</label><input id="name" name="name" placeholder="Contoh: Sepatu Running Pro" required /></div><div className="field"><label htmlFor="category">Kategori *</label><select id="category" name="category" required><option value="">Pilih kategori</option><option>Sepatu</option><option>Tas</option><option>Pakaian</option><option>Elektronik</option><option>Aksesori</option><option>Lifestyle</option></select></div></div>
      <div className="form-row"><div className="field"><label htmlFor="price">Harga *</label><input id="price" name="price" type="number" placeholder="0" required /></div><div className="field"><label htmlFor="stock">Stok *</label><input id="stock" name="stock" type="number" placeholder="0" required /></div></div>
      <div className="field"><label htmlFor="description">Deskripsi Produk</label><textarea id="description" name="description" placeholder="Tuliskan deskripsi singkat produk"></textarea></div><div className="field"><label>Gambar Produk</label><div className="upload-box"><div><strong>＋ Unggah gambar</strong><br/>PNG, JPG atau WEBP, maksimal 2 MB</div></div></div></div>
      <div className="form-actions"><Link className="btn secondary" href="/products">Batal</Link><button className="btn" type="submit">Simpan Produk</button></div>
    </form>
  </DashboardLayout>;
}
