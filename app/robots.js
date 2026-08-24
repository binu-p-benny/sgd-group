export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://sgdgroupofcompanies.com/sitemap.xml',
  };
}
