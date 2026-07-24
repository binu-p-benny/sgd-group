import { createClient } from '@supabase/supabase-js';

let client;

export function supabaseAdmin() {
  if (!client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error(
        'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables. See .env.example.'
      );
    }

    client = createClient(url, key, {
      auth: { persistSession: false },
    });
  }

  return client;
}
