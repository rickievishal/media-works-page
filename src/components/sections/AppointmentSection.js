import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

function AppointmentSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={sectionRef} className="bg-paper py-20 md:py-24 lg:py-32" id="appointment" aria-labelledby="appointment-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-8 lg:px-10">
        <Reveal
          as="p"
          className="m-0 text-xs font-black uppercase leading-none tracking-[0.12em] text-blue-swiss"
        >
          Ready when you are
        </Reveal>

        <motion.div
          style={{ y: panelY }}
          className="overflow-hidden rounded-[34px] bg-[#0c2ca4] text-white shadow-[0_28px_70px_rgba(7,24,95,0.18)]"
        >
          <div className="flex flex-col gap-10 px-6 py-8 md:px-8 md:py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-12">
            <div className="max-w-2xl">
              <Reveal
                as="h2"
                id="appointment-title"
                delay={0.08}
                className="max-w-[12ch] text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
              >
                If the business is strong, the online version should feel strong too.
              </Reveal>
              <Reveal
                as="p"
                delay={0.14}
                className="mt-5 max-w-[34ch] text-[1rem] font-medium leading-[1.72] text-white/76"
              >
                We can start with a short conversation, look at what feels off, and turn that into a sharper digital presence.
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <Button href="mailto:hello@mediaworks.studio" className="min-w-[168px] gap-4 border-acid">
                book a call
                <span aria-hidden="true">→</span>
              </Button>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AppointmentSection;
