import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Showroom from '@/components/Showroom';
import Testimonials from '@/components/Testimonials';
import VideoTestimonials from '@/components/VideoTestimonials';
import Clients from '@/components/Clients';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Showroom />
      <Testimonials />
      <VideoTestimonials />
      <Clients />
      <Blog />
      <Footer />
    </main>
  );
}
