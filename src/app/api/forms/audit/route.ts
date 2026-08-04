import { NextResponse } from "next/server";
import { Forms } from "@/lib/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, phone } = body;

    await forms.submitAuditForm({ name, email, website, phone });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 400 }
    );
  }
}
