import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion';
import { container } from '../../lib/styles';
import SectionLabel from '../ui/SectionLabel';
import TextLink from '../ui/TextLink';
import Reveal from '../ui/Reveal';

function ProjectCard({ project, index }) {
  const isTextLeft = project.layout === 'text-left';

  return (
    <motion.article
      variants={fadeInUp()}
      className={`flex flex-col gap-8 border-t border-neutral-200 pt-10 lg:flex-row lg:items-center lg:gap-16 ${
        !isTextLeft ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text */}
      <div className="flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {project.category}
        </span>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>
        <div className="mt-6">
          <TextLink href="#">View Case Study</TextLink>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="h-64 w-full object-cover transition-transform duration-500 ease-smooth hover:scale-[1.03] md:h-80 lg:h-96"
        />
      </div>
    </motion.article>
  );
}

function SelectedWorkSection() {
  return (
    <section
      className="bg-white py-20 md:py-28 lg:py-36"
      id="work"
      aria-labelledby="work-title"
    >
      <div className={container}>
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Reveal as="div">
              <SectionLabel>Portfolio</SectionLabel>
            </Reveal>
            <Reveal
              as="h2"
              id="work-title"
              delay={0.08}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-5xl"
            >
              Selected Work
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={0.12}
            className="max-w-md text-base leading-relaxed text-neutral-500 md:text-right"
          >
            A curated selection of projects demonstrating our commitment to
            precision, performance, and aesthetic clarity.
          </Reveal>
        </div>

        {/* Project cards */}
        <motion.div
          className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12, 0.1)}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
