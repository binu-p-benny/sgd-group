'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createAdminSession, destroyAdminSession, isAdminAuthenticated } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

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

export async function setSubmissionHidden(formData) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login');
  }

  const id = formData.get('id');
  const hidden = formData.get('hidden') === 'true';

  if (!id) return;

  const { error } = await supabaseAdmin()
    .from('submissions')
    .update({ is_hidden: hidden })
    .eq('id', id);

  if (error) {
    console.error('setSubmissionHidden:', error);
  }

  revalidatePath('/admin');
}
