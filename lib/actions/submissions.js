'use server';

import { supabaseAdmin } from '@/lib/supabaseAdmin';

const MAX_CV_SIZE = 5 * 1024 * 1024; // 5MB
const GENERIC_ERROR = 'Something went wrong. Please try again.';

function readField(formData, name) {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export async function submitContact(prevState, formData) {
  const name = readField(formData, 'name');
  const email = readField(formData, 'email');
  const phone = readField(formData, 'phone') || null;
  const message = readField(formData, 'message');

  if (!name || !email || !message) {
    return { error: 'Please fill in all required fields.' };
  }

  try {
    const { error } = await supabaseAdmin()
      .from('submissions')
      .insert({ type: 'contact', name, email, phone, message });

    if (error) {
      console.error('submitContact:', error);
      return { error: GENERIC_ERROR };
    }

    return { success: true };
  } catch (err) {
    console.error('submitContact:', err);
    return { error: GENERIC_ERROR };
  }
}

export async function submitEnquiry(prevState, formData) {
  const name = readField(formData, 'name');
  const email = readField(formData, 'email');
  const phone = readField(formData, 'phone');
  const message = readField(formData, 'message');

  if (!name || !email || !phone || !message) {
    return { error: 'Please fill in all required fields.' };
  }

  try {
    const { error } = await supabaseAdmin()
      .from('submissions')
      .insert({ type: 'enquiry', name, email, phone, message });

    if (error) {
      console.error('submitEnquiry:', error);
      return { error: GENERIC_ERROR };
    }

    return { success: true };
  } catch (err) {
    console.error('submitEnquiry:', err);
    return { error: GENERIC_ERROR };
  }
}

export async function submitCareerApplication(prevState, formData) {
  const name = readField(formData, 'name');
  const email = readField(formData, 'email');
  const phone = readField(formData, 'phone');
  const role = readField(formData, 'role');
  const message = readField(formData, 'message') || null;
  const cv = formData.get('cv');

  if (!name || !email || !phone || !role) {
    return { error: 'Please fill in all required fields.' };
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return { error: 'Please attach your CV.' };
  }
  if (cv.size > MAX_CV_SIZE) {
    return { error: 'CV file is too large (max 5MB).' };
  }

  try {
    const supabase = supabaseAdmin();
    const ext = cv.name.includes('.') ? cv.name.split('.').pop() : 'pdf';
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const buffer = Buffer.from(await cv.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from('cvs')
      .upload(path, buffer, { contentType: cv.type || 'application/octet-stream' });

    if (uploadError) {
      console.error('CV upload:', uploadError);
      return { error: 'Could not upload your CV. Please try again.' };
    }

    const { error: dbError } = await supabase
      .from('submissions')
      .insert({ type: 'career', name, email, phone, role, message, cv_path: path });

    if (dbError) {
      console.error('submitCareerApplication:', dbError);
      return { error: GENERIC_ERROR };
    }

    return { success: true };
  } catch (err) {
    console.error('submitCareerApplication:', err);
    return { error: GENERIC_ERROR };
  }
}
