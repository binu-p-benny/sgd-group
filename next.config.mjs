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

const nextConfig = {
  async redirects() {
    return productRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
