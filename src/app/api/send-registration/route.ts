export const dynamic = "force-dynamic"; // <-- Add this line!

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, nss, phone, email } = body;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "Nuevo registro de LiberaTuCasa",
      html: `
        <h2>Nuevo formulario de registro</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>NSS:</strong> ${nss || "No proporcionado"}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el correo" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "GET is working. Your route is set up correctly.",
  });
}
