export const BASE_URL = 'https://sgdgroup.in';

/* Head-office details — mirrored from the LocalBusiness JSON-LD in app/layout.js
   and the contact page. Keep in sync if those change. */
export const BUSINESS = {
  name: 'SGD Group of Companies',
  streetAddress: 'Indus Avenue Building, Pushpa Junction',
  locality: 'Calicut',
  region: 'Kerala',
  country: 'IN',
  telephone: '+919778151162',
  telephoneAlt: '+917026285251',
  email: 'sgdprojectmanagement@gmail.com',
};

/* The full system range, linked from every location page for internal linking. */
export const PRODUCT_RANGE = [
  { name: 'Slim Window Systems',   href: '/products/slim-window-systems',   desc: 'Minimal-sightline window systems for expansive glass.' },
  { name: 'Casement Door Systems', href: '/products/casement-door-systems', desc: 'Heavy-duty and residential casement door series.' },
  { name: 'Signature Series',      href: '/products/signature-series',      desc: 'Curtain wall, panoramic sliding and pivot-door systems.' },
  { name: 'Speciality Systems',    href: '/products/speciality-systems',    desc: 'Tilt & turn, sliding folding, vertical sliding and more.' },
];

/*
 * One entry per state we operate in.
 *
 * `contentComplete` gates BOTH indexability and sitemap inclusion. It is false
 * wherever the copy below is still generic: publishing thin, near-duplicate
 * location pages is actively harmful to a domain's search performance, so those
 * states stay noindex until real local detail is filled in. Flip the flag once
 * `intro`, `areas` and ideally `projects` describe that state specifically.
 */
export const locations = {
  kerala: {
    slug: 'kerala',
    name: 'Kerala',
    contentComplete: true,
    heroBg: '/services/services-01.png',
    title: 'Aluminium Windows & Glazing in Kerala | SGD Group',
    description:
      'Aluminium window systems, doors and architectural glazing across Kerala. SGD Group has delivered residential and commercial projects in Kozhikode, Malappuram, Thrissur and Kannur since 2014.',
    keywords:
      'aluminium windows Kerala, glazing contractors Kerala, aluminium doors Kozhikode, architectural glazing Calicut, aluminium fabrication Thrissur',
    intro:
      'SGD Group has designed, fabricated and installed aluminium window systems, doors and architectural glazing across Kerala since 2014. Our head office is in Calicut, which keeps our team within reach of sites throughout the state — from survey and shop drawings to installation and handover.',
    areasLabel: 'Districts we have delivered in',
    areas: ['Kozhikode', 'Malappuram', 'Thrissur', 'Kannur'],
    projects: [
      { name: 'Jabir, Kottakkal',    href: '/projects/jabir-kottakal',    place: 'Malappuram' },
      { name: 'Shameer, Vengara',    href: '/projects/shameer-vengara',   place: 'Malappuram' },
      { name: 'Loshidh, Thrissur',   href: '/projects/loshidh-thrissur',  place: 'Thrissur'   },
      { name: 'Nidhin, Engapuzha',   href: '/projects/nidhin-engapuzha',  place: 'Kozhikode'  },
      { name: 'Nidhin, Kannur',      href: '/projects/nidhin-kannur',     place: 'Kannur'     },
    ],
  },

  'tamil-nadu': {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    contentComplete: false,   // TODO: add cities served + local projects, then flip
    heroBg: '/services/services-03.png',
    title: 'Aluminium Windows & Glazing in Tamil Nadu | SGD Group',
    description:
      'SGD Group supplies and installs aluminium window systems, doors and architectural glazing across Tamil Nadu.',
    keywords: 'aluminium windows Tamil Nadu, glazing contractors Tamil Nadu, aluminium doors Tamil Nadu',
    intro:
      'SGD Group delivers its full range of aluminium window systems, doors and architectural glazing to projects across Tamil Nadu, coordinated from our head office in Calicut, Kerala.',
    areasLabel: 'Cities we serve',
    areas: [],
    projects: [],
  },

  karnataka: {
    slug: 'karnataka',
    name: 'Karnataka',
    contentComplete: false,   // TODO: add cities served + local projects, then flip
    heroBg: '/services/services-02.png',
    title: 'Aluminium Windows & Glazing in Karnataka | SGD Group',
    description:
      'SGD Group supplies and installs aluminium window systems, doors and architectural glazing across Karnataka.',
    keywords: 'aluminium windows Karnataka, glazing contractors Karnataka, aluminium doors Bengaluru',
    intro:
      'SGD Group delivers its full range of aluminium window systems, doors and architectural glazing to projects across Karnataka, coordinated from our head office in Calicut, Kerala.',
    areasLabel: 'Cities we serve',
    areas: [],
    projects: [],
  },
};

export const locationList = Object.values(locations);

/* Only fully-written pages belong in the sitemap. */
export const indexableLocations = locationList.filter((l) => l.contentComplete);
