"use client";

import { useState } from "react";
import { DashboardLayout } from "../components";
import { formatRupiah } from "../../lib/products";

const pulsaNominals = [
  { value: 5000, price: 7500 },
  { value: 10000, price: 12000 },
  { value: 20000, price: 21500 },
  { value: 25000, price: 26500 },
  { value: 50000, price: 51500 },
  { value: 100000, price: 101500 },
];

function getOperator(phone: string) {
  const prefix = phone.replace(/\D/g, "");
  if (/^(0811|0812|0813|0821|0822|0823)/.test(prefix)) return "Telkomsel";
  if (/^(0814|0815|0816|0855|0856|0857|0858)/.test(prefix)) return "Indosat";
  if (/^(0817|0818|0819|0859|0877|0878)/.test(prefix)) return "XL";
  if (/^(0895|0896|0897|0898|0899)/.test(prefix)) return "Tri";
  if (/^(0831|0832|0833|0838)/.test(prefix)) return "Axis";
  if (/^(0881|0882|0883|0884|0885|0886|0887|0888|0889)/.test(prefix)) return "Smartfren";
  return "";
}

export default function PulsaPage() {
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const operator = getOperator(phone);
  const selectedNominal = pulsaNominals.find((nominal) => nominal.value === selected);

  function submitPulsa() {
    if (phone.replace(/\D/g, "").length < 10) {
      setMessage("Masukkan nomor handphone yang valid.");
      return;
    }
    if (!selectedNominal) {
      setMessage("Pilih nominal pulsa terlebih dahulu.");
      return;
    }
    setMessage(`Pulsa ${formatRupiah(selectedNominal.value)} akan dikirim ke ${phone}.`);
  }

  return (
    <DashboardLayout title="Pulsa Nasional" subtitle="Isi pulsa untuk semua operator">
      <div className="pulsa-layout">
        <section className="panel pulsa-form-panel">
          <div className="panel-header"><h2>Pengisian Pulsa</h2></div>
          <div className="pulsa-form">
            <div className="field">
              <label htmlFor="phone">Nomor Handphone</label>
              <div className="phone-input-wrap">
                <span className="phone-prefix">+62</span>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Contoh: 81234567890"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value.replace(/[^0-9]/g, ""));
                    setMessage("");
                  }}
                />
              </div>
              {operator && <small className="operator-result">Operator terdeteksi: <strong>{operator}</strong></small>}
            </div>

            <div className="pulsa-nominal-section">
              <label>Pilih Nominal</label>
              <div className="pulsa-nominal-grid">
                {pulsaNominals.map((nominal) => (
                  <button
                    type="button"
                    key={nominal.value}
                    className={`pulsa-nominal-card ${selected === nominal.value ? "active" : ""}`}
                    onClick={() => {
                      setSelected(nominal.value);
                      setMessage("");
                    }}
                  >
                    <strong>{formatRupiah(nominal.value)}</strong>
                    <small>{formatRupiah(nominal.price)}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="panel pulsa-summary-panel">
          <div className="panel-header"><h2>Ringkasan Pembelian</h2></div>
          <div className="pulsa-summary">
            <div className="pulsa-summary-icon" aria-hidden="true">📱</div>
            <div className="pulsa-summary-line"><span>Produk</span><strong>Pulsa {operator || "Nasional"}</strong></div>
            <div className="pulsa-summary-line"><span>Nomor</span><strong>{phone ? `0${phone}` : "-"}</strong></div>
            <div className="pulsa-summary-line"><span>Nominal</span><strong>{selectedNominal ? formatRupiah(selectedNominal.value) : "-"}</strong></div>
            <div className="pulsa-summary-line pulsa-summary-total"><span>Total</span><strong>{selectedNominal ? formatRupiah(selectedNominal.price) : formatRupiah(0)}</strong></div>
            {message && <div className="pulsa-message" role="status">{message}</div>}
            <button type="button" className="btn pulsa-buy-button" onClick={submitPulsa}>Beli Sekarang</button>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
