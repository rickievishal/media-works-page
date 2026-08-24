import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';
import { grid, sectionTitle } from '../../lib/styles';

function AppointmentSection() {
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
  const calendarY = useTransform(scrollY, [300, 1400], [0, shouldReduceMotion || isMobile ? 0 : 24]);

  return (
    <section className={`${grid} min-h-[720px] items-center py-16 md:py-24 lg:py-40`} id="appointment" aria-labelledby="appointment-title">
      <div className="col-span-4 md:col-span-8 lg:col-span-6">
        <Reveal as="div">
          <SectionLabel>Start a project</SectionLabel>
        </Reveal>
        <Reveal as="h2" id="appointment-title" delay={0.08} className={sectionTitle}>
          Book a working session
        </Reveal>
        <Reveal
          as="p"
          delay={0.15}
          className="my-6 max-w-[35ch] text-[clamp(1rem,1.4vw,1.18rem)] font-bold leading-[1.36] text-blue-ink/60 md:mb-8"
        >
          A focused 30-minute session to map the clearest path from idea to polished launch.
        </Reveal>
        <Reveal delay={0.22}>
          <Button href="mailto:hello@mediaworks.studio">book now</Button>
        </Reveal>
      </div>

      <motion.div
        style={{ y: calendarY }}
        className="col-span-4 mt-14 grid min-h-[336px] justify-items-stretch md:col-span-8 md:max-w-[440px] lg:col-span-4 lg:col-start-8 lg:mt-0"
      >
        <Reveal className="h-full">
          <div className="grid min-h-[280px] grid-rows-[auto_1fr_auto] border-2 border-blue-swiss bg-blue-swiss p-6 text-white shadow-[16px_16px_0_#0b0d10] md:min-h-[328px] md:shadow-[24px_24px_0_#0b0d10]">
            <span className="text-[0.82rem] font-black uppercase leading-none">APR</span>
            <span className="self-center justify-self-start text-[clamp(8rem,15vw,14rem)] font-black leading-[0.78] tracking-normal">12</span>
            <span className="justify-self-end text-[0.82rem] font-black uppercase leading-none">30 min / remote</span>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

export default AppointmentSection;
