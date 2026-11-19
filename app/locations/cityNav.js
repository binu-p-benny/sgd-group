/* Lightweight city list for the navigation, state pages and sitemap.
   Kept separate from cities.js so the client-side nav bundle doesn't pull in
   every city's full page copy. Names/slugs here are the single source of truth. */
export const cityNav = [
  {
    "slug": "madurai",
    "name": "Madurai",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "hosur",
    "name": "Hosur",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "salem",
    "name": "Salem",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "tiruppur",
    "name": "Tiruppur",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "erode",
    "name": "Erode",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "trichy",
    "name": "Tiruchirappalli (Trichy)",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "tirunelveli",
    "name": "Tirunelveli",
    "state": "tamil-nadu",
    "published": true
  },
  {
    "slug": "mysuru",
    "name": "Mysuru (Mysore)",
    "state": "karnataka",
    "published": true
  },
  {
    "slug": "mangaluru",
    "name": "Mangaluru (Mangalore)",
    "state": "karnataka",
    "published": true
  },
  {
    "slug": "hubballi-dharwad",
    "name": "Hubballi–Dharwad",
    "state": "karnataka",
    "published": true
  },
  {
    "slug": "belagavi",
    "name": "Belagavi (Belgaum)",
    "state": "karnataka",
    "published": true
  },
  {
    "slug": "shivamogga",
    "name": "Shivamogga (Shimoga)",
    "state": "karnataka",
    "published": true
  },
  {
    "slug": "tumakuru",
    "name": "Tumakuru (Tumkur)",
    "state": "karnataka",
    "published": true
  }
];

export const publishedCities = cityNav.filter((c) => c.published);
export const citiesByState = (state) => publishedCities.filter((c) => c.state === state);
