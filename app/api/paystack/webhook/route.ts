import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { getPaystackSecret, processPaystackEvent } from '@/lib/paystack';

export async function POST(request: Request) {
  const raw = await request.text();
  const secret = getPaystackSecret();
  const signature = request.headers.get('x-paystack-signature') || '';
  const expected = secret ? crypto.createHmac('sha512', secret).update(raw).digest('hex') : '';
  const supplied = Buffer.from(signature);
  const calculated = Buffer.from(expected);
  if (!secret || supplied.length !== calculated.length || !crypto.timingSafeEqual(supplied, calculated)) return new NextResponse('Invalid signature', { status: 401 });
  let event: Record<string, unknown>;
  try { event = JSON.parse(raw); } catch { return new NextResponse('Invalid payload', { status: 400 }); }
  const result = await processPaystackEvent(event);
  return NextResponse.json({ received: true, ...result });
}
