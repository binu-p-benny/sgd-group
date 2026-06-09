import Navigation from '@/components/home/Navigation';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Products from '@/components/home/Products';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Showroom from '@/components/home/Showroom';
import Testimonials from '@/components/home/Testimonials';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import Clients from '@/components/home/Clients';
import Blog from '@/components/home/Blog';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'SGD Group of Companies | Aluminium & Glazing Specialists Kerala',
  description: 'SGD Group — Kerala\'s trusted aluminium window systems, doors, facades, and architectural glazing specialists. 10+ years of craftsmanship across South India.',
  alternates: {
    canonical: 'https://sgdgroup.in',
  },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Products />
      <FeaturedProjects />
      <Showroom />
      <Testimonials />
      <VideoTestimonials />
      <Clients />
      <Blog />
      <Footer />
    </main>
  );
}
