import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '../../data/content';
import Reveal from '../ui/Reveal';

function ServiceCard({ service, index, progress }) {
  const offset = (index - 1) * 18;
  const y = useTransform(progress, [0, 1], [offset + 34, offset - 26]);

  return (
    <motion.article
      style={{ y }}
      className="relative overflow-hidden rounded-[30px] border border-blue-swiss/12 bg-paper p-6 shadow-[0_18px_50px_rgba(7,24,95,0.08)] transition-transform duration-300 ease-swiss hover:-translate-y-1 md:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-80" />
      <Reveal
        as="span"
        delay={0.06 + index * 0.05}
        className="block text-[0.8rem] font-black uppercase tracking-[0.12em] text-blue-swiss/48"
      >
        {service.number}
      </Reveal>
      <Reveal
        as="h3"
        delay={0.12 + index * 0.05}
        className="mt-6 max-w-[14ch] text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.03em] text-blue-ink md:text-[1.65rem]"
      >
        {service.title}
      </Reveal>
      <Reveal
        as="p"
        delay={0.18 + index * 0.05}
        className="mt-4 max-w-[34ch] text-[0.96rem] font-medium leading-[1.68] text-blue-ink/62"
      >
        {service.text}
      </Reveal>
    </motion.article>
  );
}

function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={sectionRef} className="bg-paper py-20 md:py-24 lg:py-32" id="services" aria-labelledby="services-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <Reveal
              as="p"
              className="m-0 text-xs font-black uppercase leading-none tracking-[0.12em] text-blue-swiss"
            >
              What we shape
            </Reveal>
            <Reveal
              as="h2"
              id="services-title"
              delay={0.08}
              className="mt-4 max-w-[12ch] text-[clamp(2rem,5vw,3.9rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-blue-ink"
            >
              The parts people see. The feeling they leave with.
            </Reveal>
          </div>

          <Reveal
            as="p"
            delay={0.14}
            className="max-w-[34ch] text-[0.98rem] font-medium leading-[1.7] text-blue-ink/64"
          >
            Everything after the hero is about proving the business has range, taste, and a point of view online.
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
