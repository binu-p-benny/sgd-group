import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Supabase's free tier auto-pauses a project after 7 days with zero database
// activity — which silently breaks every form on the site (Contact, Brochure,
// Enquiry, Careers) until someone notices and manually restores it. A scheduled
// GitHub Actions job (.github/workflows/keepalive.yml) hits this route every
// few days purely to generate a real query, so the project never goes quiet
// long enough to trigger the pause.
export async function GET() {
  try {
    const { error } = await supabaseAdmin()
      .from('submissions')
      .select('id')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
