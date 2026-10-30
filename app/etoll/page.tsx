"use client";

import { useState } from "react";
import { DashboardLayout } from "../components";
import { formatRupiah } from "../../lib/products";

const providers = ["Mandiri e-Money", "BRIZZI", "Flazz BCA", "TapCash BNI"];
const nominals = [50000, 100000, 200000, 250000, 500000];

export default function EtollPage() {
  const [provider, setProvider] = useState(providers[0]);
  const [cardNumber, setCardNumber] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  function submit() {
    if (cardNumber.replace(/\D/g, "").length < 10) {
      setMessage("Masukkan nomor kartu e-Toll yang valid.");
      return;
    }
    if (!selected) {
      setMessage("Pilih nominal isi ulang terlebih dahulu.");
      return;
    }
    setMessage(`Top up ${formatRupiah(selected)} untuk kartu ${provider} sedang diproses.`);
  }

  return <DashboardLayout title="e-Toll" subtitle="Isi ulang kartu tol elektronik Anda">
    <div className="pulsa-layout">
      <section className="panel pulsa-form-panel">
        <div className="panel-header"><h2>Pengisian e-Toll</h2></div>
        <div className="pulsa-form">
          <div className="field"><label htmlFor="provider">Jenis e-Toll</label><select id="provider" value={provider} onChange={(event) => setProvider(event.target.value)}>{providers.map((item) => <option key={item}>{item}</option>)}</select></div>
          <div className="field"><label htmlFor="cardNumber">Nomor Kartu</label><input id="cardNumber" inputMode="numeric" placeholder="Masukkan nomor kartu e-Toll" value={cardNumber} onChange={(event) => { setCardNumber(event.target.value.replace(/[^0-9]/g, "")); setMessage(""); }} /></div>
          <div className="pulsa-nominal-section"><label>Pilih Nominal</label><div className="pulsa-nominal-grid">{nominals.map((nominal) => <button type="button" key={nominal} className={`pulsa-nominal-card ${selected === nominal ? "active" : ""}`} onClick={() => { setSelected(nominal); setMessage(""); }}><strong>{formatRupiah(nominal)}</strong><small>Top Up</small></button>)}</div></div>
        </div>
      </section>
      <aside className="panel pulsa-summary-panel"><div className="panel-header"><h2>Ringkasan Pembelian</h2></div><div className="pulsa-summary"><div className="pulsa-summary-icon" aria-hidden="true">🚗</div><div className="pulsa-summary-line"><span>Produk</span><strong>{provider}</strong></div><div className="pulsa-summary-line"><span>Nomor Kartu</span><strong>{cardNumber || "-"}</strong></div><div className="pulsa-summary-line"><span>Nominal</span><strong>{selected ? formatRupiah(selected) : "-"}</strong></div><div className="pulsa-summary-line pulsa-summary-total"><span>Total</span><strong>{selected ? formatRupiah(selected) : formatRupiah(0)}</strong></div>{message && <div className="pulsa-message" role="status">{message}</div>}<button type="button" className="btn pulsa-buy-button" onClick={submit}>Beli Sekarang</button></div></aside>
    </div>
  </DashboardLayout>;
}
