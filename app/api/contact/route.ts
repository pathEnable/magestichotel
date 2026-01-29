import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatFrom(fromEmail: string) {
  if (fromEmail.includes("<") && fromEmail.includes(">")) return fromEmail;
  return `Majestic Hotel <${fromEmail}>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { name?: string; email?: string; message?: string };
    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const message = (body.message || "").trim();

    if (!name) {
      return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ error: "Message requis" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.RESEND_ADMIN_EMAIL;

    if (!apiKey || !fromEmail || !adminEmail) {
      return NextResponse.json(
        { error: "Configuration email manquante (RESEND_API_KEY / RESEND_FROM_EMAIL / RESEND_ADMIN_EMAIL)" },
        { status: 500 }
      );
    }

    const from = formatFrom(fromEmail);

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessageHtml = escapeHtml(message).replaceAll("\n", "<br/>");
    const time = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" });

    await resend.emails.send({
      from,
      to: adminEmail,
      reply_to: email,
      subject: `Contact — Nouveau message de ${name}`,
      text: `Nouveau message depuis le site\n\nNom: ${name}\nEmail: ${email}\nDate: ${time}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">Contact — Nouveau message</h2>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa">
            <p style="margin:0"><strong>Nom :</strong> ${safeName}</p>
            <p style="margin:6px 0 0"><strong>Email :</strong> ${safeEmail}</p>
            <p style="margin:6px 0 0"><strong>Date :</strong> ${escapeHtml(time)}</p>
          </div>
          <h3 style="margin:16px 0 8px">Message</h3>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px">
            <p style="margin:0">${safeMessageHtml}</p>
          </div>
        </div>
      `.trim(),
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Nous avons bien reçu votre message — Majestic Hotel",
      text: `Bonjour ${name},\n\nMerci pour votre message. Nous vous répondrons dès que possible.\n\nRécapitulatif:\n${message}\n\nCordialement,\nMajestic Hotel`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">Merci pour votre message</h2>
          <p style="margin:0 0 12px">Bonjour ${safeName},</p>
          <p style="margin:0 0 16px">Merci pour votre message. Nous vous répondrons dès que possible.</p>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa">
            <p style="margin:0"><strong>Votre message :</strong></p>
            <p style="margin:8px 0 0">${safeMessageHtml}</p>
          </div>
          <p style="margin:16px 0 0">Cordialement,<br/>Majestic Hotel</p>
        </div>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
