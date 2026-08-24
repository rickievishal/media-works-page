import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ManifestoSection from './components/sections/ManifestoSection';
import ServicesSection from './components/sections/ServicesSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import AppointmentSection from './components/sections/AppointmentSection';

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-clip">
      <Header />
      <main id="top">
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <PrinciplesSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
