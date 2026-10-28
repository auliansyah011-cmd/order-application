export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Aktif" | "Habis";
  description: string;
  color: string;
};

export const products: Product[] = [
  { id: "PRD-001", name: "Sepatu Running Pro", category: "Sepatu", price: 850000, stock: 24, status: "Aktif", description: "Sepatu lari ringan dengan bantalan responsif untuk latihan harian.", color: "#dbeafe" },
  { id: "PRD-002", name: "Tas Ransel Urban", category: "Tas", price: 320000, stock: 18, status: "Aktif", description: "Ransel serbaguna dengan kompartemen laptop dan detail anti-air.", color: "#dcfce7" },
  { id: "PRD-003", name: "Jam Tangan Modern", category: "Aksesori", price: 1250000, stock: 7, status: "Aktif", description: "Jam tangan elegan dengan dial minimalis dan tali silikon.", color: "#fef3c7" },
  { id: "PRD-004", name: "Headphone Studio", category: "Elektronik", price: 980000, stock: 0, status: "Habis", description: "Headphone over-ear untuk pengalaman audio yang mendalam.", color: "#ede9fe" },
  { id: "PRD-005", name: "Kemeja Linen", category: "Pakaian", price: 275000, stock: 32, status: "Aktif", description: "Kemeja linen bernapas dengan potongan modern dan nyaman.", color: "#ffe4e6" },
  { id: "PRD-006", name: "Botol Tumbler 750ml", category: "Lifestyle", price: 150000, stock: 45, status: "Aktif", description: "Tumbler stainless steel tahan suhu untuk aktivitas sehari-hari.", color: "#cffafe" },
  { id: "PRD-007", name: "Sneakers Classic", category: "Sepatu", price: 690000, stock: 12, status: "Aktif", description: "Sneakers klasik serba bisa untuk gaya kasual sehari-hari.", color: "#e0e7ff" },
  { id: "PRD-008", name: "Topi Baseball", category: "Aksesori", price: 120000, stock: 0, status: "Habis", description: "Topi baseball ringan dengan penutup belakang yang dapat disesuaikan.", color: "#ffedd5" },
];

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
