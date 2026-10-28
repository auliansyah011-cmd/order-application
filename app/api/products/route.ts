import { products } from "../../../lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const limit = Math.max(1, Number(searchParams.get("limit") || 10));
  const start = (page - 1) * limit;
  return Response.json({ data: products.slice(start, start + limit), pagination: { page, limit, total: products.length, totalPages: Math.ceil(products.length / limit) } });
}

export async function POST(request: Request) {
  let data: Record<string, FormDataEntryValue | string>;
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) data = await request.json(); else data = Object.fromEntries(await request.formData());
  const stock = Number(data.stock || 0);
  const product = { id: `PRD-${String(products.length + 1).padStart(3, "0")}`, name: String(data.name || "Produk Baru"), category: String(data.category || "Lainnya"), price: Number(data.price || 0), stock, status: stock > 0 ? "Aktif" as const : "Habis" as const, description: String(data.description || "Produk baru dari katalog OrderApp."), color: "#dbeafe" };
  products.push(product);
  if (!contentType.includes("application/json")) return new Response(null, { status: 303, headers: { Location: `/products/${product.id}` } });
  return Response.json({ success: true, data: product }, { status: 201 });
}
