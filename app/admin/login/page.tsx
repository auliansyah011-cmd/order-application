import Link from "next/link";
import { Logo } from "../../components";

export default function AdminLoginPage() {
  return <main className="auth-page"><form className="auth-card" action="/admin/dashboard" method="get">
    <Logo /><h1>Admin Login</h1><p>Masuk ke panel administrasi OrderApp</p>
    <div className="field"><label htmlFor="email">Email Admin</label><input id="email" type="email" placeholder="admin@orderapp.com" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" placeholder="Masukkan password" required /></div>
    <button className="btn" type="submit">Masuk sebagai Admin</button>
    <div className="auth-footer"><Link href="/login">Masuk sebagai pengguna</Link></div>
  </form></main>;
}
