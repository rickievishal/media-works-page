import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/motion';
import { grid, sectionTitle } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

const principles = [
  {
    title: '08px',
    text: 'Baseline spacing keeps rhythm consistent from hero type to the smallest action.',
  },
  {
    title: '12 col',
    text: 'A strict column grid creates strong alignments and purposeful asymmetry.',
  },
  {
    title: '<30px',
    text: 'Parallax stays quiet, adding depth without pulling focus from the typography.',
  },
];

function PrinciplesSection() {
  return (
    <section className={`${grid} border-y border-y-blue-ink/20 py-16 lg:border-b-blackish lg:py-24`} aria-labelledby="proof-title">
      <Reveal as="div" className="col-span-4 md:col-span-8 lg:col-span-3">
        <SectionLabel>Operating principles</SectionLabel>
      </Reveal>
      <Reveal
        as="h2"
        id="proof-title"
        delay={0.08}
        className={`col-span-4 mt-6 max-w-[11ch] md:col-span-8 lg:col-span-9 lg:col-start-4 lg:mt-0 ${sectionTitle}`}
      >
        Less decoration. More signal. Motion only when it sharpens attention.
      </Reveal>

      <motion.div
        className="col-span-4 mt-16 grid grid-cols-1 gap-10 md:col-span-8 lg:col-span-9 lg:col-start-4 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.07, 0.13)}
      >
        {principles.map((principle) => (
          <motion.div key={principle.title} variants={fadeInUp()} className="border-t border-blue-swiss pt-4">
            <span className="text-[clamp(1.8rem,3vw,3.4rem)] font-black uppercase leading-[0.9] text-blue-swiss">
              {principle.title}
            </span>
            <p className="mt-5 text-[0.94rem] font-bold leading-[1.38] text-blue-ink/60">{principle.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PrinciplesSection;
