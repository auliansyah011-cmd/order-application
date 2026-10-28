import Link from "next/link";
import type { ReactNode } from "react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="OrderApp beranda">
      <span className="logo-mark"><span /></span>
      {!compact && <span>Order<span className="logo-accent">App</span></span>}
    </Link>
  );
}

export function Sidebar({ role = "user" }: { role?: "user" | "admin" }) {
  const admin = role === "admin";
  return (
    <aside className="sidebar">
      <Logo />
      <nav className="side-nav">
        <Link href={admin ? "/admin/dashboard" : "/dashboard"} className="side-link active"><span>▦</span>{admin ? "Dashboard" : "Beranda"}</Link>
        <Link href={admin ? "/admin/products" : "/products"} className="side-link"><span>◫</span>Produk</Link>
        {admin && <Link href="/products/create" className="side-link"><span>＋</span>Tambah Produk</Link>}
        {!admin && <><Link href="/orders" className="side-link"><span>▣</span>Pesanan Saya</Link><Link href="/checkout" className="side-link"><span>◉</span>Checkout Produk</Link><Link href="/profile" className="side-link"><span>♙</span>Profil</Link></>}
        {admin && <Link href="/admin/profile" className="side-link"><span>♙</span>Profil Admin</Link>}
      </nav>
      <Link href={admin ? "/admin/login" : "/login"} className="side-link logout"><span>↪</span>Keluar</Link>
    </aside>
  );
}

export function Topbar({ title, subtitle, role = "user" }: { title: string; subtitle?: string; role?: "user" | "admin" }) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notifikasi">♢</button>
        <div className="avatar">AR</div>
        <div className="account"><strong>Andi Rizky</strong><span>{role === "admin" ? "Administrator" : "Pengguna"}</span></div>
      </div>
    </header>
  );
}

export function DashboardLayout({ children, role = "user", title, subtitle }: { children: ReactNode; role?: "user" | "admin"; title: string; subtitle?: string }) {
  return (
    <div className="app-shell">
      <Sidebar role={role} />
      <main className="main-area">
        <Topbar title={title} subtitle={subtitle} role={role} />
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
