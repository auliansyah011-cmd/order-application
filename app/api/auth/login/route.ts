export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  return Response.json({ success: true, user: { name: "Andi Rizky", email: data.email ?? "andi.rizky@email.com" } });
}
