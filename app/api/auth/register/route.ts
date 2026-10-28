export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  if (!data.email || !data.password) return Response.json({ success: false, message: "Email dan password wajib diisi" }, { status: 400 });
  return Response.json({ success: true, message: "Registrasi berhasil", user: { name: data.name, email: data.email } }, { status: 201 });
}
