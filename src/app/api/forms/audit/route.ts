import { NextResponse } from "next/server";
import { Forms } from "@/lib/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, phone, scores, findings } = body;

    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanWebsite = typeof website === "string" ? website.trim() : "";

    await forms.submitAuditForm({
      name: cleanName,
      email: cleanEmail,
      website: cleanWebsite,
      phone: cleanPhone,
      scores,
      findings
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
