'use server';

import { redirect } from 'next/navigation';
import { createAdminSession, destroyAdminSession } from '@/lib/adminAuth';

export async function adminLogin(prevState, formData) {
  const password = formData.get('password');

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return { error: 'Admin login is not configured yet. Check environment variables.' };
  }
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Incorrect password.' };
  }

  await createAdminSession();
  redirect('/admin');
}

export async function adminLogout() {
  await destroyAdminSession();
  redirect('/admin/login');
}
