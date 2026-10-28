export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  return Response.json({ success: true, role: "admin", email: data.email ?? "admin@orderapp.com" });
}
