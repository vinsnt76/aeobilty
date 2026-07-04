import { NextResponse } from "next/server";
import { Forms } from "@/antigravity/modules/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website } = body;

    await forms.submitAuditForm({ name, email, website });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 400 }
    );
  }
}
