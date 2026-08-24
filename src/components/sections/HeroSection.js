import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import TextLink from '../ui/TextLink';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';
import { grid } from '../../lib/styles';
import video from "../../assets/videos/hero.mp4"
import hero_img from "../../assets/images/hero-bg.png"
import crazy from "../../assets/images/crazy.png"
function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth <= 760;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const updateMobile = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMobile);
      return () => mediaQuery.removeEventListener('change', updateMobile);
    }

    mediaQuery.addListener(updateMobile);
    return () => mediaQuery.removeListener(updateMobile);
  }, []);

  const { scrollY } = useScroll();
  const mediaY = useTransform(scrollY, [0, 700], [0, shouldReduceMotion || isMobile ? 0 : 18]);
  const worksY = useTransform(scrollY, [0, 700], [0, shouldReduceMotion || isMobile ? 0 : 28]);
  const metaY = useTransform(scrollY, [0, 700], [0, shouldReduceMotion || isMobile ? 0 : 14]);

  return (
    <section
      className={`relative min-h-[calc(70vh-40px)] md:min-h-[calc(100vh-40px)] py-4 `}
      aria-labelledby="hero-title"
    >
      <div className="z-0 absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] bg-black overflow-hidden">
          <img className='w-full h-full object-cover' src={hero_img}/>
      </div>
     <div className='z-10 absolute w-full h-full flex flex-col justify-start md:justify-center items-center pt-8'>
      <div className='flex  flex-col justify-center items-center pb-4'>
        <h1 className="text-4xl font-bold tracking-tighter flex items-center">We Build <span><img className="max-w-[100px]" src={crazy}/></span> websites!</h1>
        <p className="py-4">
          The one stop for making your business goo prrrrr...
        </p>
        <Button className="min-w-30 gap-4 justify-self-start lg:justify-self-end" >Build Now <span aria-hidden="true">→</span></Button>
      </div>
      <div className="w-[calc(80vw)] md:max-w-[800px] border-black border-2 rounded-lg overflow-hidden shadow-[7px_08px_0px_rgba(0,0,0,0.8)]">
          <video className="w-full h-full object-cover " muted autoPlay loop src={video}/>
      </div>
     </div>
    </section>
  );
}

export default HeroSection;
