import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emphasisPoints, presenceLayers } from '../../data/content';
import Reveal from '../ui/Reveal';

function ManifestoSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const layerY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const cardY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-blue-swiss text-white" id="work">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,255,0,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-20 md:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal
              as="p"
              className="m-0 text-xs font-black uppercase leading-none tracking-[0.12em] text-acid"
            >
              Media Works / built to be noticed
            </Reveal>
            <Reveal
              as="h2"
              delay={0.08}
              className="mt-4 max-w-[12ch] text-[clamp(2.3rem,7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em]"
            >
              We make businesses feel impossible to scroll past.
            </Reveal>
          </div>

          <Reveal
            as="p"
            delay={0.14}
            className="max-w-[34ch] text-[1rem] font-medium leading-[1.7] text-white/72"
          >
            When the business is good but the internet version feels flat, forgettable, or stitched together, we fix the gap.
          </Reveal>
        </div>

        {/* <motion.div
          style={{ y: layerY }}
          className="flex flex-wrap gap-3 border-y border-white/12 py-6 text-[0.82rem] font-semibold tracking-[0.08em] text-white/70"
        >
          {presenceLayers.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </motion.div> */}

        <div className="grid gap-5 md:grid-cols-3">
          {emphasisPoints.map((point, index) => (
            <motion.div
              key={point.label}
              style={{ y: cardY }}
              className="rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm"
            >
              <Reveal
                as="span"
                delay={0.08 + index * 0.06}
                className="block text-[0.8rem] font-black uppercase tracking-[0.12em] text-acid"
              >
                {point.label}
              </Reveal>
              <Reveal
                as="p"
                delay={0.14 + index * 0.06}
                className="mt-6 max-w-[24ch] text-[1.05rem] font-medium leading-[1.55] text-white/82"
              >
                {point.text}
              </Reveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
