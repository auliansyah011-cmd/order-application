import { products } from "../../../../lib/products";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const product = products.find(item => item.id === id);
  if (!product) return Response.json({ success: false, message: "Produk tidak ditemukan" }, { status: 404 });
  return Response.json({ success: true, data: product });
}
