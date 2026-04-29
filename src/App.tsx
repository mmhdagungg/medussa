import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
