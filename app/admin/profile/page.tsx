'use client';

import { useState } from "react";
import { DashboardLayout } from "../../components";

const initialAdmin = {
  name: "Andi Rizky",
  email: "admin@orderapp.com",
  address: "Jl. Merdeka No. 45, Jakarta Pusat",
  phone: "+62 812 3456 7890",
  status: "Aktif",
  date: "28 Oktober 2026",
  time: "16:30 WIB",
};

export default function AdminProfilePage() {
  const [admin, setAdmin] = useState(initialAdmin);
  const [draft, setDraft] = useState(initialAdmin);
  const [editing, setEditing] = useState(false);

  function startEditing() {
    setDraft(admin);
    setEditing(true);
  }

  function saveChanges() {
    setAdmin(draft);
    setEditing(false);
  }

  return <DashboardLayout role="admin" title="Profil Admin" subtitle="Kelola informasi akun administrator">
    <div className="admin-profile-layout">
      <section className="panel admin-profile-card">
        <div className="admin-avatar">AR</div>
        <h2>{admin.name}</h2>
        <span className="badge">Administrator</span>
      </section>

      <section className="panel admin-profile-info">
        <div className="panel-header">
          <h2>Informasi Admin</h2>
          {!editing && <button className="btn" type="button" onClick={startEditing}>Edit Profil</button>}
        </div>

        {editing ? <div className="admin-edit-grid">
          <div className="field"><label htmlFor="admin-name">Nama Admin</label><input id="admin-name" value={draft.name} onChange={event => setDraft({ ...draft, name: event.target.value })} /></div>
          <div className="field"><label htmlFor="admin-email">Email Admin</label><input id="admin-email" type="email" value={draft.email} onChange={event => setDraft({ ...draft, email: event.target.value })} /></div>
          <div className="field"><label htmlFor="admin-address">Alamat</label><input id="admin-address" value={draft.address} onChange={event => setDraft({ ...draft, address: event.target.value })} /></div>
          <div className="field"><label htmlFor="admin-phone">No. Admin</label><input id="admin-phone" value={draft.phone} onChange={event => setDraft({ ...draft, phone: event.target.value })} /></div>
          <div className="field"><label htmlFor="admin-status">Status Admin</label><select id="admin-status" value={draft.status} onChange={event => setDraft({ ...draft, status: event.target.value })}><option>Aktif</option><option>Nonaktif</option></select></div>
          <div className="field"><label htmlFor="admin-date">Tanggal Admin</label><input id="admin-date" type="text" value={draft.date} onChange={event => setDraft({ ...draft, date: event.target.value })} /></div>
          <div className="field"><label htmlFor="admin-time">Jam Admin</label><input id="admin-time" type="text" value={draft.time} onChange={event => setDraft({ ...draft, time: event.target.value })} /></div>
          <div className="edit-actions">
            <button className="btn secondary" type="button" onClick={() => setEditing(false)}>Batal</button>
            <button className="btn" type="button" onClick={saveChanges}>Simpan Perubahan</button>
          </div>
        </div> : <div className="admin-info-grid">
          <ProfileInfo label="Nama Admin" value={admin.name} />
          <ProfileInfo label="Email Admin" value={admin.email} />
          <ProfileInfo label="Alamat" value={admin.address} />
          <ProfileInfo label="No. Admin" value={admin.phone} />
          <ProfileInfo label="Status Admin" value={admin.status} />
          <ProfileInfo label="Tanggal Admin" value={admin.date} />
          <ProfileInfo label="Jam Admin" value={admin.time} />
        </div>}
      </section>
    </div>
  </DashboardLayout>;
}

function ProfileInfo({ label, value }: { label: string; value: string }) {
  return <div className="admin-info-item"><small>{label}</small><strong>{value}</strong></div>;
}
