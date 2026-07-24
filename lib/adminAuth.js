import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'sgd_admin_session';
const SESSION_VALUE = 'admin';
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('Missing ADMIN_SESSION_SECRET environment variable. See .env.example.');
  }
  return secret;
}

function sign(value, secret) {
  return createHmac('sha256', secret).update(value).digest('hex');
}

export async function createAdminSession() {
  const secret = getSecret();
  const token = `${SESSION_VALUE}.${sign(SESSION_VALUE, secret)}`;
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  if (!process.env.ADMIN_SESSION_SECRET) return false;
  const secret = getSecret();
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;

  const [value, signature] = token.split('.');
  if (!value || !signature) return false;

  const expected = sign(value, secret);
  const provided = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);

  if (provided.length !== expectedBuf.length) return false;
  return value === SESSION_VALUE && timingSafeEqual(provided, expectedBuf);
}
