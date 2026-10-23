import { NextRequest, NextResponse } from 'next/server';
import { GET as answerGET, POST as answerPOST, OPTIONS as answerOPTIONS } from './answer/route';

export const runtime = 'edge';

export async function OPTIONS() {
  return answerOPTIONS();
}

export async function GET(req: NextRequest) {
  return answerGET(req);
}

export async function POST(req: NextRequest) {
  return answerPOST(req);
}
