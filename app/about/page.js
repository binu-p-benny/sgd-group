import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import AboutProjects from '@/components/about/AboutProjects';
import Clients from '@/components/home/Clients';

export const metadata = {
  title: 'About SGD Group of Companies | Kerala Glazing & Aluminium Specialists',
  description: 'Learn about SGD Group, Kerala\'s trusted aluminium and glazing company with over 10 years of experience delivering premium architectural solutions across South India.',
  keywords: 'SGD Group about, Kerala glazing company, aluminium specialists Kerala, architectural glazing South India',
  openGraph: {
    title: 'About SGD Group of Companies',
    description: 'Kerala\'s trusted aluminium and glazing specialists with 10+ years of experience.',
    url: 'https://sgdgroup.in/about',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        title="Our Story"
        bg="/about.png"
      />

      {/* Built with Precision — Story Section */}
      <AboutStory />

      {/* Our Mission Section */}
      <AboutMission />

      {/* Our Vision Section */}
      <AboutVision />

      {/* Completed Projects Section */}
      <AboutProjects />

      <Clients />

      <Footer />
    </main>
  );
}