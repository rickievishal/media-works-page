import { motion } from 'framer-motion';
import { processSteps } from '../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion';
import { container } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

function HowWeWorkSection() {
  return (
    <section
      className="bg-neutral-950 py-20 md:py-28 lg:py-36"
      id="process"
      aria-labelledby="process-title"
    >
      <div className={container}>
        {/* Header */}
        <Reveal as="div">
          <SectionLabel className="text-neutral-500">Our process</SectionLabel>
        </Reveal>
        <Reveal
          as="h2"
          id="process-title"
          delay={0.08}
          className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          How We Work
        </Reveal>

        {/* Process steps grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-20 lg:grid-cols-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.15)}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.title}
              variants={fadeInUp()}
              className="border-t border-neutral-700 pt-6"
            >
              <span className="text-xs font-semibold text-neutral-500">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
