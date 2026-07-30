import { blogPosts } from './blog/posts';
// Location pages are parked — app/_locations is a private folder, so the routes
// do not resolve. Restore with the loop below when they go live.
// import { indexableLocations } from './_locations/data';

const BASE_URL = 'https://sgdgroup.in';

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/products/aluminium-window-systems', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/aluminium-door-systems', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/signature-systems', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
];

const projectSlugs = [
  'jabir-kottakal',
  'shameer-vengara',
  'loshidh-thrissur',
  'nidhin-engapuzha',
  'nidhin-kannur',
  'nikshan-electronics',
  'eham-digital',
];

const productRoutes = {
  'aluminium-window-systems': ['eco-gulf', 'hl40', 'blaze', 'slide-pro'],
  'aluminium-door-systems': ['imperialss2', 'vista', 'ultra', 'retrogulf', 'hl50', 'nexus', 'horizon'],
  'signature-systems': ['parallel-opening', 'tilt-turn', 'vertical-sliding', 'sliding-folding'],
};

// Slugs are mirrored from each route's local product/project data objects —
// keep in sync if those lists change.
export default function sitemap() {
  const entries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  for (const slug of projectSlugs) {
    entries.push({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  for (const [category, slugs] of Object.entries(productRoutes)) {
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}/products/${category}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Only states whose copy is written — see contentComplete in ./_locations/data.js
  // for (const loc of indexableLocations) {
  //   entries.push({
  //     url: `${BASE_URL}/locations/${loc.slug}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'monthly',
  //     priority: 0.8,
  //   });
  // }

  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate || post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
