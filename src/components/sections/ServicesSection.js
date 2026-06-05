import { motion } from 'framer-motion';
import { services } from '../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion';
import { grid, sectionTitle } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import Reveal from '../ui/Reveal';

function ServicesSection() {
  return (
    <section className={`${grid} py-16 md:py-24 lg:py-40`} id="services" aria-labelledby="services-title">
      <div className="col-span-4 md:col-span-5">
        <Reveal as="div">
          <SectionLabel>Selected capabilities</SectionLabel>
        </Reveal>
        <Reveal as="h2" id="services-title" delay={0.08} className={sectionTitle}>
          What we do
        </Reveal>
      </div>

      <motion.div
        className="col-span-4 mt-14 grid grid-cols-4 gap-x-4 md:col-span-8 md:mt-20 md:grid-cols-8 md:gap-x-6 lg:col-span-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08, 0.12)}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeInUp()}
            className="col-span-4 grid min-h-0 cursor-pointer grid-cols-[52px_minmax(0,1fr)] gap-4 border-t-2 border-blue-swiss py-6 pb-10 text-blue-ink transition-[transform,box-shadow,border-color] duration-200 ease-swiss hover:-translate-y-2 hover:scale-[1.01] hover:border-acid hover:shadow-[0_18px_0_-16px_#9cff00] md:col-span-8 md:grid-cols-[64px_minmax(0,1fr)] md:gap-6 lg:col-span-4 lg:min-h-[304px]"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[0.86] text-blue-swiss">{service.number}</span>
            <div>
              <h3 className="max-w-[8ch] text-[clamp(2.25rem,11vw,4rem)] font-black uppercase leading-[0.88] tracking-normal md:text-[clamp(2.35rem,4.4vw,5.25rem)]">
                {service.title}
              </h3>
              <p className="mt-6 max-w-[27ch] text-[0.98rem] font-bold leading-[1.36] text-blue-ink/60">{service.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default ServicesSection;
