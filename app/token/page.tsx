"use client";

import { useState } from "react";
import { DashboardLayout } from "../components";
import { formatRupiah } from "../../lib/products";

const nominals = [20000, 50000, 100000, 200000, 500000, 1000000];

export default function TokenPage() {
  const [meterNumber, setMeterNumber] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  function submit() {
    if (meterNumber.replace(/\D/g, "").length < 11) {
      setMessage("Masukkan nomor meter PLN yang valid.");
      return;
    }
    if (!selected) {
      setMessage("Pilih nominal token PLN terlebih dahulu.");
      return;
    }
    setMessage(`Token PLN ${formatRupiah(selected)} untuk nomor meter ${meterNumber} sedang diproses.`);
  }

  return <DashboardLayout title="Token PLN" subtitle="Beli token listrik prabayar PLN">
    <div className="pulsa-layout">
      <section className="panel pulsa-form-panel">
        <div className="panel-header"><h2>Pengisian Token PLN</h2></div>
        <div className="pulsa-form">
          <div className="field"><label htmlFor="meterNumber">Nomor Meter / ID Pelanggan</label><input id="meterNumber" inputMode="numeric" placeholder="Masukkan nomor meter PLN" value={meterNumber} onChange={(event) => { setMeterNumber(event.target.value.replace(/[^0-9]/g, "")); setMessage(""); }} /><small className="operator-result">Nomor terdapat pada meter atau struk rekening listrik.</small></div>
          <div className="pulsa-nominal-section"><label>Pilih Nominal Token</label><div className="pulsa-nominal-grid">{nominals.map((nominal) => <button type="button" key={nominal} className={`pulsa-nominal-card ${selected === nominal ? "active" : ""}`} onClick={() => { setSelected(nominal); setMessage(""); }}><strong>{formatRupiah(nominal)}</strong><small>Token PLN</small></button>)}</div></div>
        </div>
      </section>
      <aside className="panel pulsa-summary-panel"><div className="panel-header"><h2>Ringkasan Pembelian</h2></div><div className="pulsa-summary"><div className="pulsa-summary-icon" aria-hidden="true">⚡</div><div className="pulsa-summary-line"><span>Produk</span><strong>Token PLN</strong></div><div className="pulsa-summary-line"><span>Nomor Meter</span><strong>{meterNumber || "-"}</strong></div><div className="pulsa-summary-line"><span>Nominal</span><strong>{selected ? formatRupiah(selected) : "-"}</strong></div><div className="pulsa-summary-line pulsa-summary-total"><span>Total</span><strong>{selected ? formatRupiah(selected) : formatRupiah(0)}</strong></div>{message && <div className="pulsa-message" role="status">{message}</div>}<button type="button" className="btn pulsa-buy-button" onClick={submit}>Beli Sekarang</button></div></aside>
    </div>
  </DashboardLayout>;
}
