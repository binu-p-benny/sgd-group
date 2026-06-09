import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import FloatingButtons from '@/components/molecules/FloatingButtons';

export const metadata = {
  metadataBase: new URL('https://sgdgroup.in'),
  title: {
    default: 'SGD Group of Companies | Aluminium & Glazing Specialists Kerala',
    template: '%s | SGD Group of Companies',
  },
  description: 'SGD Group of Companies — Kerala\'s leading specialists in aluminium window systems, doors, facades, and architectural glazing. 10+ years of precision craftsmanship.',
  keywords: 'aluminium windows Kerala, glazing specialists Kerala, SGD Group, architectural glazing, aluminium doors Kerala, curtain wall Kerala, facade systems Kerala',
  authors: [{ name: 'SGD Group of Companies' }],
  creator: 'SGD Group of Companies',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sgdgroup.in',
    siteName: 'SGD Group of Companies',
    title: 'SGD Group of Companies | Aluminium & Glazing Specialists Kerala',
    description: 'Kerala\'s leading specialists in aluminium window systems, doors, facades, and architectural glazing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SGD Group of Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SGD Group of Companies | Aluminium & Glazing Specialists Kerala',
    description: 'Kerala\'s leading specialists in aluminium & glazing solutions.',
    images: ['/og-image.png'],
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
    canonical: 'https://sgdgroup.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SGD Group of Companies",
              "description": "Kerala's leading specialists in aluminium window systems, doors, facades, and architectural glazing.",
              "url": "https://sgdgroup.in",
              "logo": "https://sgdgroup.in/logo-cl.png",
              "image": "https://sgdgroup.in/og-image.png",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "areaServed": "Kerala, India",
              "foundingDate": "2014",
              "sameAs": [
                "https://www.instagram.com/sgdgroup",
                "https://www.youtube.com/@sgdgroup"
              ]
            })
          }}
        />
      </head>
      <body>
        <LenisProvider>
          <FloatingButtons />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
