import { motion } from 'framer-motion';
import { aboutValues } from '../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion';
import { container } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

function AboutSection() {
  return (
    <section
      className="py-20 md:py-28 lg:py-36"
      id="about"
      aria-labelledby="about-title"
    >
      <div className={container}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column */}
          <div className="flex-shrink-0 lg:w-1/3">
            <Reveal as="div">
              <SectionLabel>Who we are</SectionLabel>
            </Reveal>
            <Reveal
              as="h2"
              id="about-title"
              delay={0.08}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-5xl"
            >
              About Us
            </Reveal>
            <Reveal
              as="p"
              delay={0.14}
              className="mt-4 text-lg font-medium text-neutral-500"
            >
              Built by developers, not a sales team.
            </Reveal>
          </div>

          {/* Right column — values grid */}
          <motion.div
            className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.12)}
          >
            {aboutValues.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp()}
                className="border-t border-neutral-200 pt-6"
              >
                <h3 className="text-lg font-bold text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
