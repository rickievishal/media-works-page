import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../ui/Reveal';

function PrinciplesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // const leftY = useTransform(scrollYProgress, [0, 1], [28, -12]);
  // const rightY = useTransform(scrollYProgress, [0, 1], [12, -28]);

  return (
    <section ref={sectionRef} className="bg-[#eef2ff] py-20 md:py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-8 lg:px-10">
        <Reveal
          as="p"
          className="m-0 text-xs font-black uppercase leading-none tracking-[0.12em] text-blue-swiss"
        >
          What changes when it clicks
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 ">
          <motion.div
            style={{ y: 0 }}
            className="rounded-[34px] bg-blue-swiss px-6 py-8 text-white shadow-[0_22px_60px_rgba(7,24,95,0.12)] md:px-8 md:py-10"
          >
            <Reveal
              as="h2"
              delay={0.08}
              className="max-w-[11ch] text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.04em]"
            >
              Better presence creates better attention.
            </Reveal>
            <Reveal
              as="p"
              delay={0.14}
              className="mt-6 max-w-[34ch] text-[1rem] font-medium leading-[1.72] text-white/76"
            >
              People trust faster when the website looks intentional, the social presence looks alive, and the brand feels like someone is actually steering it.
            </Reveal>
          </motion.div>

          <motion.div
            style={{ y: 0 }}
            className="rounded-[34px] border border-blue-swiss/12 bg-paper px-6 py-8 text-blue-ink shadow-[0_18px_40px_rgba(7,24,95,0.08)] md:px-8 md:py-10"
          >
            <Reveal
              as="p"
              delay={0.12}
              className="text-[0.8rem] font-black uppercase tracking-[0.12em] text-blue-swiss/48"
            >
              In practice
            </Reveal>
            <Reveal
              as="ul"
              delay={0.18}
              className="mt-6 space-y-4 text-[0.98rem] font-medium leading-[1.65] text-blue-ink/68"
            >
              <li>People get what you do faster</li>
              <li>The business looks more established</li>
              <li>Your online presence stops feeling like an afterthought</li>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;
