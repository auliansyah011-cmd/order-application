import { DashboardLayout } from "../components";

export default function ProfilePage() {
  return <DashboardLayout title="Profil Saya" subtitle="Kelola informasi akun Anda">
    <div className="profile-grid">
      <section className="panel profile-card"><div className="avatar">AR</div><h2>Andi Rizky</h2><p>User / Customer</p></section>
      <section className="panel profile-info"><h2>Informasi Pengguna</h2><div className="info-grid"><div><small>Nama lengkap</small><strong>Andi Rizky</strong></div><div><small>Email</small><strong>andi.rizky@email.com</strong></div><div><small>Nomor telepon</small><strong>+62 812 3456 7890</strong></div><div><small>Terdaftar sejak</small><strong>12 Januari 2026</strong></div><div><small>Alamat</small><strong>Jl. Merdeka No. 45, Jakarta</strong></div><div><small>Status akun</small><strong>Aktif</strong></div></div><button className="btn" style={{marginTop:24}}>Edit Profil</button></section>
    </div>
  </DashboardLayout>;
}
