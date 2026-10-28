import Link from "next/link";
import { Logo } from "../components";

export default function LoginPage() {
  return <main className="auth-page"><form className="auth-card" action="/dashboard" method="get">
    <Logo /><h1>Masuk Akun</h1><p>Masukkan detail akun Anda untuk melanjutkan</p>
    <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="nama@email.com" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" placeholder="Masukkan password" required /></div>
    <button className="btn" type="submit">Masuk</button>
    <div className="auth-footer">Belum punya akun? <Link href="/register">Daftar sekarang</Link></div>
  </form></main>;
}
