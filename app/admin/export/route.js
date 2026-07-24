import ExcelJS from 'exceljs';
import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { formatDate } from '@/lib/formatDate';

export async function GET(request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  const { searchParams } = new URL(request.url);
  const showHidden = searchParams.get('view') === 'hidden';

  const supabase = supabaseAdmin();
  const { data: submissions, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('is_hidden', showHidden)
    .eq('is_deleted', false)
    .order('created_at', { ascending: false });

  if (error) {
    return new Response(`Could not export submissions: ${error.message}`, { status: 500 });
  }

  const cvPaths = (submissions ?? []).filter((s) => s.cv_path).map((s) => s.cv_path);
  const cvUrlMap = {};
  if (cvPaths.length > 0) {
    const { data: signedUrls } = await supabase.storage
      .from('cvs')
      .createSignedUrls(cvPaths, 60 * 60 * 24); // 24h — long enough to still work after export
    signedUrls?.forEach((entry, i) => {
      if (entry.signedUrl) cvUrlMap[cvPaths[i]] = entry.signedUrl;
    });
  }

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'SGD Group Admin';
  workbook.created = new Date();

  const sheet = workbook.addWorksheet(showHidden ? 'Hidden' : 'Active');
  sheet.columns = [
    { header: 'Date', key: 'date', width: 20 },
    { header: 'Type', key: 'type', width: 12 },
    { header: 'Name', key: 'name', width: 22 },
    { header: 'Email', key: 'email', width: 28 },
    { header: 'Phone', key: 'phone', width: 16 },
    { header: 'Role', key: 'role', width: 20 },
    { header: 'Message', key: 'message', width: 50 },
    { header: 'CV Link', key: 'cv', width: 40 },
  ];
  sheet.getRow(1).font = { bold: true };

  (submissions ?? []).forEach((s) => {
    sheet.addRow({
      date: formatDate(s.created_at),
      type: s.type,
      name: s.name,
      email: s.email,
      phone: s.phone || '',
      role: s.role || '',
      message: s.message || '',
      cv: s.cv_path ? cvUrlMap[s.cv_path] || '' : '',
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const dateStamp = new Date().toISOString().slice(0, 10);
  const filename = `submissions-${showHidden ? 'hidden' : 'active'}-${dateStamp}.xlsx`;

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
