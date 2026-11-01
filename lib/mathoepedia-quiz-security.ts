import { createHash, timingSafeEqual } from 'node:crypto';

export const clean = (value: unknown, max = 120) => String(value ?? '').trim().slice(0, max);
export const tokenHash = (value: string) => createHash('sha256').update(value).digest('hex');

export function validHostKey(value: unknown) {
  const supplied = Buffer.from(clean(value, 200));
  const expected = Buffer.from(process.env.MATHOEPEDIA_HOST_KEY || '');
  return expected.length > 0 && supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export function randomCode(length = 6) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('');
}
