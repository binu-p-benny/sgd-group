const BASE_URL = 'https://sgdgroup.in';

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/products/aluminium-doors', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/casement-door-systems', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/signature-series', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/slim-window-systems', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/speciality-systems', priority: 0.8, changeFrequency: 'monthly' },
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
  'casement-door-systems': ['hl50', 'hl40'],
  'signature-series': ['nexus', 'horizon', 'blaze'],
  'slim-window-systems': ['imperialss2', 'vista', 'ultra', 'retrogulf', 'eco-gulf'],
  'speciality-systems': ['slide-pro', 'vertical-sliding', 'tilt-turn', 'sliding-folding', 'parallel-opening'],
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

  return entries;
}
