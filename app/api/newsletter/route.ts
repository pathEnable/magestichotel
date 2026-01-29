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
  return `Hôtel Ave Maria <${fromEmail}>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string };
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.RESEND_ADMIN_EMAIL;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !fromEmail || !adminEmail) {
      return NextResponse.json(
        { error: "Configuration email manquante (RESEND_API_KEY / RESEND_FROM_EMAIL / RESEND_ADMIN_EMAIL)" },
        { status: 500 }
      );
    }

    const from = formatFrom(fromEmail);

    const resend = new Resend(apiKey);

    if (audienceId) {
      await resend.contacts.create({
        audienceId,
        email,
      });
    }

    const safeEmail = escapeHtml(email);
    const time = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" });

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: "Newsletter — Nouvelle inscription",
      text: `Nouvelle inscription à la newsletter\n\nEmail: ${email}\nDate: ${time}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">Newsletter — Nouvelle inscription</h2>
          <p style="margin:0 0 8px">Une nouvelle personne s’est inscrite à la newsletter.</p>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa">
            <p style="margin:0"><strong>Email :</strong> ${safeEmail}</p>
            <p style="margin:6px 0 0"><strong>Date :</strong> ${escapeHtml(time)}</p>
          </div>
        </div>
      `.trim(),
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Bienvenue — Newsletter Hôtel Ave Maria",
      text: `Bonjour,\n\nMerci pour votre inscription à la newsletter de l’Hôtel Ave Maria.\nNous vous enverrons nos nouveautés de temps en temps.\n\nÀ très bientôt,\nHôtel Ave Maria`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">Bienvenue à la newsletter</h2>
          <p style="margin:0 0 12px">Bonjour,</p>
          <p style="margin:0 0 12px">Merci pour votre inscription à la newsletter de l’<strong>Hôtel Ave Maria</strong>.</p>
          <p style="margin:0 0 16px">Nous vous enverrons nos nouveautés et offres spéciales de temps en temps.</p>
          <div style="padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa">
            <p style="margin:0"><strong>Adresse email :</strong> ${safeEmail}</p>
          </div>
          <p style="margin:16px 0 0">À très bientôt,<br/>Hôtel Ave Maria</p>
        </div>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
