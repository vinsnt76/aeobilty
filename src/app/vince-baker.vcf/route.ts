import { NextResponse } from 'next/server';

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Vince Baker
ORG:AEObility
TITLE:Founder & AI Automation Specialist
TEL;TYPE=CELL,VOICE:0480 286 282
EMAIL;TYPE=PREF,INTERNET:vince@aeobility.com.au
URL:https://aeobility.com.au
END:VCARD`;

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="vince-baker.vcf"',
    },
  });
}
