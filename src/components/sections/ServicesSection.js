import { motion } from 'framer-motion';
import { services } from '../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion';
import { container } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

function ServicesSection() {
  return (
    <section
      className="py-20 md:py-28 lg:py-36"
      id="services"
      aria-labelledby="services-title"
    >
      <div className={container}>
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-shrink-0">
            <Reveal as="div">
              <SectionLabel>What we do</SectionLabel>
            </Reveal>
            <Reveal
              as="h2"
              id="services-title"
              delay={0.08}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-5xl"
            >
              Our Services
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={0.12}
            className="max-w-md text-base leading-relaxed text-neutral-500 md:text-right"
          >
            We don't just build websites; we engineer digital tools designed to
            drive results. Our focused approach ensures every pixel serves a
            purpose.
          </Reveal>
        </div>

        {/* Services grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-px bg-neutral-200 md:mt-20 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.12)}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp()}
              className="group cursor-pointer bg-neutral-100 p-8 transition-colors duration-300 hover:bg-white md:p-10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
                  {service.title}
                </h3>
                {/* Arrow icon */}
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 13L13 1M13 1H3M13 1V11" />
                  </svg>
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
                {service.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
