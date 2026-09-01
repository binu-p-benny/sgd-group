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
import styles from './page.module.css';

export const metadata = {
  title: 'Expert Glass & Window Installation and Service in Kerala | SGD Group',
  description: 'Discover the best windows for home in Kerala with SGD Group of Companies. Premium, durable glass and windows for home in Kerala designed for style, safety, and performance.',
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com',
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
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
