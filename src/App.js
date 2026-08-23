import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import SelectedWorkSection from './components/sections/SelectedWorkSection';
import HowWeWorkSection from './components/sections/HowWeWorkSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SelectedWorkSection />
        <HowWeWorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
