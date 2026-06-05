import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import TextLink from '../ui/TextLink';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';
import { grid } from '../../lib/styles';

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
      className={`${grid} relative min-h-[calc(100vh-40px)] py-16 before:hidden before:absolute before:bottom-0 before:left-10 before:top-0 before:w-px before:bg-blue-ink/20 before:content-[''] md:py-20 lg:py-36 lg:before:block`}
      aria-labelledby="hero-title"
    >
      <div className="col-span-4 md:col-span-8 lg:col-span-9">
        <Reveal as="div">
          <SectionLabel>Digital design studio / Chennai + Remote</SectionLabel>
        </Reveal>
        <h1
          id="hero-title"
          className="mt-4 grid text-[clamp(4.2rem,22vw,7rem)] font-black uppercase leading-[0.78] tracking-normal text-blue-swiss md:text-[clamp(5.6rem,14vw,14.5rem)]"
          aria-label="Media Works"
        >
          <motion.span style={{ y: mediaY }} className="block w-max">
            Media
          </motion.span>
          <motion.span style={{ y: worksY }} className="ml-8 block w-max text-blue-ink md:ml-14 lg:ml-36">
            Works
          </motion.span>
        </h1>
      </div>

      <motion.div
        style={{ y: metaY }}
        className="col-span-4 mt-8 self-end md:col-span-8 md:max-w-xl lg:col-span-4 lg:col-start-8 lg:mt-20"
      >
        <Reveal
          as="p"
          delay={0.09}
          className="max-w-[34ch] text-[clamp(1.1rem,1.8vw,1.48rem)] font-bold leading-[1.08] text-blue-ink"
        >
          We build exacting web identities for teams that need clarity, pace, and a memorable digital point of view.
        </Reveal>
        <Reveal
          delay={0.18}
          className="mt-6 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6"
        >
          <Button href="#appointment">book now</Button>
          <TextLink href="#services">view services</TextLink>
        </Reveal>
      </motion.div>

      <Reveal
        delay={0.27}
        className="col-span-4 mt-16 grid max-w-xs grid-cols-[56px_1fr] gap-x-4 gap-y-2 self-end text-xs font-black uppercase leading-none text-blue-ink/60 md:col-span-4 lg:col-span-3"
      >
        <span className="row-span-3 text-5xl leading-[0.86] text-blue-swiss">01</span>
        <span>strategy</span>
        <span>identity</span>
        <span>systems</span>
      </Reveal>
    </section>
  );
}

export default HeroSection;
