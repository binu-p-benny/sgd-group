import Script from 'next/script';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import FloatingButtons from '@/components/molecules/FloatingButtons';

export const metadata = {
  metadataBase: new URL('https://sgdgroupofcompanies.com'),
  title: {
    default: 'SGD Group of Companies | Aluminium & Glazing Specialists Kerala',
  },
  description: 'SGD Group of Companies — Kerala\'s leading specialists in aluminium window systems, doors, facades, and architectural glazing. 10+ years of precision craftsmanship.',
  keywords: 'aluminium windows Kerala, glazing specialists Kerala, SGD Group, architectural glazing, aluminium doors Kerala, curtain wall Kerala, facade systems Kerala',
  authors: [{ name: 'SGD Group of Companies' }],
  creator: 'SGD Group of Companies',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sgdgroupofcompanies.com',
    siteName: 'SGD Group of Companies',
    title: 'Expert Glass & Window Installation and Service in Kerala | SGD Group',
    description: 'Discover the best windows for home in Kerala with SGD Group of Companies. Premium, durable glass and windows for home in Kerala designed for style, safety, and performance.',
    images: [
      {
        url: '/hero.png',
        width: 1024,
        height: 1024,
        alt: 'SGD Group of Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Glass & Window Installation and Service in Kerala | SGD Group',
    description: 'Discover the best windows for home in Kerala with SGD Group of Companies. Premium, durable glass and windows for home in Kerala designed for style, safety, and performance.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com',
  },
  verification: {
    google: 'm7igxirYO458eDmREiumfKtFPeZLBWZdYthOL0ylHeI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K896LSG2');`}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "SGD Group of Companies",
              "description": "Kerala's leading specialists in aluminium window systems, doors, facades, and architectural glazing.",
              "url": "https://sgdgroupofcompanies.com",
              "logo": "https://sgdgroupofcompanies.com/logo-cl.png",
              "image": "https://sgdgroupofcompanies.com/hero.png",
              "telephone": "+917902266219",
              "email": "sgdprojectmanagement@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Signature Blossom, Karikkamkulam, Kozhikode Balussery Rd, Karikkamkulam, Thadampattuthazham",
                "addressLocality": "Kozhikode",
                "addressRegion": "Kerala",
                "postalCode": "673010",
                "addressCountry": "IN"
              },
              "areaServed": [
                { "@type": "State", "name": "Kerala", "containedInPlace": { "@type": "Country", "name": "India" } },
                { "@type": "State", "name": "Tamil Nadu", "containedInPlace": { "@type": "Country", "name": "India" } },
                { "@type": "State", "name": "Karnataka", "containedInPlace": { "@type": "Country", "name": "India" } }
              ],
              "foundingDate": "2014",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:30",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/sgdgroupofcompanies",
                "https://www.facebook.com/share/1ZbubB8ZKb/?mibextid=wwXIfr",
                "https://www.linkedin.com/company/sgd-group-of-companies/",
                "https://youtube.com/@glassandwindowsbyakash?si=yYGwq0szPDRvnhg6"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K896LSG2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <LenisProvider>
          <FloatingButtons />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
