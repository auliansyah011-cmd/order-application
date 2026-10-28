import Link from "next/link";
import { Logo } from "../components";

export default function RegisterPage() {
  return <main className="auth-page"><form className="auth-card" action="/login" method="get">
    <Logo /><h1>Daftar Akun</h1><p>Buat akun baru untuk mulai menggunakan OrderApp</p>
    <div className="field"><label htmlFor="name">Nama lengkap</label><input id="name" placeholder="Nama lengkap Anda" required /></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="nama@email.com" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" placeholder="Minimal 8 karakter" required /></div>
    <button className="btn" type="submit">Buat Akun</button>
    <div className="auth-footer">Sudah punya akun? <Link href="/login">Masuk</Link></div>
  </form></main>;
}
