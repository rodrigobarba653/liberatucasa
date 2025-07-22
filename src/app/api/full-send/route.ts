import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();

  const html = `
    <h2>Nuevo formulario de registro</h2>

    <h3>Datos personales</h3>
    <p><strong>Nombre:</strong> ${formData.name || "-"}</p>
    <p><strong>NSS:</strong> ${formData.nss || "No proporcionado"}</p>
    <p><strong>Teléfono:</strong> ${formData.phone || "-"}</p>
    <p><strong>Email:</strong> ${formData.email || "-"}</p>

    <h3>Ubicación</h3>
    <p><strong>Calle:</strong> ${formData.street || "-"}</p>
    <p><strong>Número:</strong> ${formData.number || "-"}</p>
    <p><strong>Colonia:</strong> ${formData.colony || "-"}</p>
    <p><strong>Municipio:</strong> ${formData.municipality || "-"}</p>
    <p><strong>Estado:</strong> ${formData.state || "-"}</p>

    <h3>Características</h3>
    <p><strong>Metros construcción:</strong> ${formData.constructionMeters || "-"}</p>
    <p><strong>Metros terreno:</strong> ${formData.landMeters || "-"}</p>
    <p><strong>Recámaras:</strong> ${formData.bedrooms || "-"}</p>
    <p><strong>Baños:</strong> ${formData.bathrooms || "-"}</p>
    <p><strong>Niveles:</strong> ${formData.levels || "-"}</p>

    <h3>Adeudos</h3>
    <p><strong>Infonavit/Banco:</strong> ${formData.debtBank || "No tiene adeudos"}</p>
    <p><strong>Monto:</strong> ${formData.debtBankAmount ? `$${formData.debtBankAmount}` : "-"}</p>
    <p><strong>Predial:</strong> ${formData.debtPredial || "No tiene adeudos"}</p>
    <p><strong>Monto:</strong> ${formData.debtPredialAmount ? `$${formData.debtPredialAmount}` : "-"}</p>
    <p><strong>Luz:</strong> ${formData.debtLuz || "No tiene adeudos"}</p>
    <p><strong>Monto:</strong> ${formData.debtLuzAmount ? `$${formData.debtLuzAmount}` : "-"}</p>
    <p><strong>Agua:</strong> ${formData.debtAgua || "No tiene adeudos"}</p>
    <p><strong>Monto:</strong> ${formData.debtAguaAmount ? `$${formData.debtAguaAmount}` : "-"}</p>

    <h3>Historial</h3>
    <p><strong>Motivo de liberación:</strong> ${formData.reason || "-"}</p>
    <p><strong>Problema jurídico:</strong> ${formData.legalIssue || "-"}</p>
    <p><strong>Escrituras a tu nombre:</strong> ${formData.hasDeed || "-"}</p>
    <p><strong>No. cuenta catastral:</strong> ${formData.cadastral || "-"}</p>
    <p><strong>Dinero deseado después:</strong> ${formData.desiredAmount ? `$${formData.desiredAmount}` : "-"}</p>
  `;

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "Nuevo registro de LiberaTuCasa",
      html,
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
