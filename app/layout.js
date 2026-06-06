import './globals.css';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: 'SGD Group of Companies - Structural & Architectural Glazing Specialists',
  description: 'Leading specialists in architectural and structural glazing, delivering cutting-edge glass solutions for iconic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
