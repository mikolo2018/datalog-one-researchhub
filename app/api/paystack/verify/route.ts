import { NextResponse } from 'next/server';
import { paystackRequest, processSuccessfulCharge } from '@/lib/paystack';

export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get('reference')?.trim() || '';
  if (!/^DATALOG-[A-Za-z0-9-]{8,80}$/.test(reference)) return NextResponse.json({ error: 'Invalid payment reference.' }, { status: 400 });
  try {
    const { response, result } = await paystackRequest(`/transaction/verify/${encodeURIComponent(reference)}`);
    if (!response.ok || !result.status) return NextResponse.json({ status: 'pending', message: result.message || 'Payment confirmation is pending.' }, { status: 202 });
    if (result.data?.status !== 'success') return NextResponse.json({ status: result.data?.status || 'pending', message: 'Payment has not been completed.' }, { status: 202 });
    const processed = await processSuccessfulCharge(result.data);
    if (!processed.ok) return NextResponse.json({ status: 'attention', message: processed.error || 'Payment requires review.' }, { status: 409 });
    return NextResponse.json({ status: 'success', itemName: processed.itemName, itemKind: processed.itemKind });
  } catch {
    return NextResponse.json({ status: 'pending', message: 'Payment confirmation is temporarily unavailable.' }, { status: 503 });
  }
}
