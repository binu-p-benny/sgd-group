/** @type {import('next').NextConfig} */

/*
 * The product catalogue was regrouped from 4 categories into 3, so every product
 * URL moved. Each old path gets a permanent (301) redirect to preserve the search
 * equity already earned. These are exact paths, so the product entries cannot be
 * swallowed by the category entries below them.
 *
 * NOTE: the previous config redirected /products/aluminium-window-systems ->
 * /products/slim-window-systems. That slug is now a real category page, so the
 * old rule is deliberately gone — keeping it would make the new page unreachable.
 */
const productRedirects = [
  // → Aluminium Window Systems
  ['/products/slim-window-systems/eco-gulf',        '/products/aluminium-window-systems/eco-gulf'],
  ['/products/casement-door-systems/hl40',          '/products/aluminium-window-systems/hl40'],
  ['/products/signature-series/blaze',              '/products/aluminium-window-systems/blaze'],
  ['/products/speciality-systems/slide-pro',        '/products/aluminium-window-systems/slide-pro'],

  // → Aluminium Door Systems
  ['/products/slim-window-systems/imperialss2',     '/products/aluminium-door-systems/imperialss2'],
  ['/products/slim-window-systems/vista',           '/products/aluminium-door-systems/vista'],
  ['/products/slim-window-systems/ultra',           '/products/aluminium-door-systems/ultra'],
  ['/products/slim-window-systems/retrogulf',       '/products/aluminium-door-systems/retrogulf'],
  ['/products/casement-door-systems/hl50',          '/products/aluminium-door-systems/hl50'],
  ['/products/signature-series/nexus',              '/products/aluminium-door-systems/nexus'],
  ['/products/signature-series/horizon',            '/products/aluminium-door-systems/horizon'],

  // → Signature Systems
  ['/products/speciality-systems/parallel-opening', '/products/signature-systems/parallel-opening'],
  ['/products/speciality-systems/tilt-turn',        '/products/signature-systems/tilt-turn'],
  ['/products/speciality-systems/vertical-sliding', '/products/signature-systems/vertical-sliding'],
  ['/products/speciality-systems/sliding-folding',  '/products/signature-systems/sliding-folding'],

  // Retired category landing pages → closest surviving category
  ['/products/slim-window-systems',                 '/products/aluminium-door-systems'],
  ['/products/casement-door-systems',               '/products/aluminium-door-systems'],
  ['/products/signature-series',                    '/products/signature-systems'],
  ['/products/speciality-systems',                  '/products/signature-systems'],
  ['/products/aluminium-doors',                     '/products/aluminium-door-systems'],
];

/*
 * Legacy URLs from the WordPress site this project replaces (sgdgroupofcompanies.com).
 * Sourced from that site's full page-sitemap.xml + post-sitemap.xml (60 URLs total) so
 * every previously-indexed page gets a permanent redirect instead of 404ing once the
 * domain is repointed here, carrying over whatever search equity it had built up.
 *
 * A handful of old pages (staircase handrails, canopies, shower enclosures, UV glass,
 * floor glass) cover product lines this site doesn't carry at all — those go to the
 * general /products page rather than a mismatched category.
 */
const legacyWordpressRedirects = [
  // Utility / company pages (blog, careers, and contact already exist at the
  // same slug on this site, so no redirect entry is needed for those)
  ['/thank-you',                                                                   '/'],
  ['/qhse',                                                                        '/about'],
  ['/faq',                                                                         '/contact'],
  ['/about-us',                                                                    '/about'],

  // Named products → their new product detail pages
  ['/hl-vista-slim-system',                                                        '/products/aluminium-door-systems/vista'],
  ['/hl-ultra-slim-system',                                                        '/products/aluminium-door-systems/ultra'],
  ['/hl-sliding-folding-system',                                                   '/products/signature-systems/sliding-folding'],
  ['/hl-retro-gulf-slim-system',                                                   '/products/aluminium-door-systems/retrogulf'],
  ['/hl-imperial-slim-system',                                                     '/products/aluminium-door-systems/imperialss2'],
  ['/hl-eco-gulf-slim-system',                                                     '/products/aluminium-window-systems/eco-gulf'],
  ['/hl-50-casement-door',                                                         '/products/aluminium-door-systems/hl50'],
  ['/hl-40-casement-window',                                                       '/products/aluminium-window-systems/hl40'],

  // Geo-targeted page → the matching state's location page
  ['/system-aluminium-windows-in-chennai',                                         '/locations/tamil-nadu'],

  // Door-flavoured generic/Lumina/folding pages → Aluminium Door Systems
  ['/algerian-sliding-doors-and-windows',                                          '/products/aluminium-door-systems'],
  ['/algeria-sliding-doors-and-windows',                                           '/products/aluminium-door-systems'],
  ['/frameless-sliding-and-open-doors',                                            '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-new',                            '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-tn',                             '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-ka',                             '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-with-grill-new',                 '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-with-grill-ka',                  '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-sliding-system-doors-with-grill-tn',                  '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-openable-door-new',                                   '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-openable-door-tn',                                    '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-openable-door-with-grill-new',                        '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-openable-door-with-grill-ka',                         '/products/aluminium-door-systems'],
  ['/lumina-slim-line-series-openable-door-with-grill-tn',                         '/products/aluminium-door-systems'],

  // Window-flavoured generic/Lumina pages → Aluminium Window Systems
  ['/open-windows',                                                                '/products/aluminium-window-systems'],
  ['/openable-windows',                                                            '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-sliding-system-windows',                              '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-sliding-system-windows-new',                          '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-sliding-system-windows-with-grill-new',               '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-sliding-system-windows-with-grill-ka',                '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-casement-openable-windows-new',                       '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-casement-openable-windows-with-grill-new',            '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-casement-openable-windows-with-grill-ka',             '/products/aluminium-window-systems'],
  ['/lumina-slim-line-series-casement-openable-windows-with-grill-tn',             '/products/aluminium-window-systems'],

  // Folding mechanism → Signature Systems (features Sliding Folding)
  ['/folding-doors',                                                               '/products/signature-systems/sliding-folding'],
  ['/folding-windows',                                                             '/products/signature-systems'],
  ['/lumina-slim-line-series-folding-window-ka',                                   '/products/signature-systems'],
  ['/lumina-slim-line-series-folding-window-tn',                                   '/products/signature-systems'],

  // No current equivalent on this site → general Products catalog
  ['/hl-elite-gulf-slim-system',                                                   '/products/aluminium-window-systems'],
  ['/hl-2560-partition-system',                                                    '/products'],
  ['/floor-glass',                                                                 '/products'],
  ['/staircase-handrails',                                                         '/products'],
  ['/skylight-canopies',                                                           '/products'],
  ['/balcony-handrails',                                                           '/products'],
  ['/shower-enclosure',                                                            '/products'],
  ['/uv-glasses',                                                                  '/products'],
  ['/canopies',                                                                    '/products'],
  ['/industrial-staircase',                                                        '/products'],

  // Blog posts (3 are generic template filler unrelated to SGD's business, 2 cover
  // handrails/staircases — none match current content, so all go to the blog listing)
  ['/making-moves-how-to-choose-the-right-logistics-partner-for-your-relocation',  '/blog'],
  ['/beyond-borders-the-challenges-and-rewards-of-international-relocation',       '/blog'],
  ['/mastering-the-art-of-stress-free-relocation-insider-tips-and-tricks',         '/blog'],
  ['/aluminum-glass-handrails-with-wooden-finish-a-modern-and-secure-choice',      '/blog'],
  ['/choosing-the-right-materials-for-glass-and-wooden-staircases',                '/blog'],
];

const nextConfig = {
  async redirects() {
    return [...productRedirects, ...legacyWordpressRedirects].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;

// Enables Cloudflare bindings (env vars, etc.) when running `next dev` locally
// against the OpenNext Cloudflare adapter. See open-next.config.ts / wrangler.jsonc.
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
