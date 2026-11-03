import { createHash, timingSafeEqual } from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';

export const clean = (value: unknown, max = 120) => String(value ?? '').trim().slice(0, max);
export const tokenHash = (value: string) => createHash('sha256').update(value).digest('hex');

function matchesSecret(value: unknown, expectedValue: string) {
  const supplied = Buffer.from(clean(value, 200));
  const expected = Buffer.from(expectedValue);
  return expected.length > 0 && supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export function validHostKey(value: unknown) {
  return matchesSecret(value, process.env.MATHOEPEDIA_HOST_KEY || '');
}

export function validAdminKey(value: unknown) {
  return matchesSecret(value, process.env.MATHOEPEDIA_ADMIN_KEY || process.env.MATHOEPEDIA_HOST_KEY || '');
}

export type TeacherAuthorization = { kind: 'master' } | { kind: 'teacher'; id: string };

export async function authorizeTeacher(db: SupabaseClient, value: unknown): Promise<TeacherAuthorization | null> {
  if (validHostKey(value)) return { kind: 'master' };
  const supplied = clean(value, 200).toUpperCase();
  if (!supplied) return null;
  const { data } = await db.from('matho_teacher_access').select('id,status,expires_at').eq('code_hash', tokenHash(supplied)).maybeSingle();
  if (!data || data.status !== 'active' || new Date(data.expires_at).getTime() <= Date.now()) return null;
  void db.from('matho_teacher_access').update({ last_used_at: new Date().toISOString() }).eq('id', data.id);
  return { kind: 'teacher', id: data.id };
}

export function randomCode(length = 6) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('');
}
