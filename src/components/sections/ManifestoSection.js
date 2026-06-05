import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { grid } from '../../lib/styles';

function ManifestoSection() {
  return (
    <section
      className={`${grid} min-h-80 items-end border-y border-y-blue-ink/20 py-16 lg:border-t-blackish`}
      id="work"
    >
      <Reveal as="p" className="col-span-4 m-0 text-xs font-black uppercase leading-none text-blue-swiss md:col-span-2">
        MW / 2026
      </Reveal>
      <Reveal
        as="h2"
        delay={0.08}
        className="col-span-4 mt-6 text-[clamp(3rem,15vw,5.7rem)] font-black uppercase leading-[0.92] tracking-normal md:col-span-6 md:mt-0 md:text-[clamp(2.2rem,5vw,6.5rem)] lg:col-span-7"
      >
        Web work with a point of view, built on grid, rhythm, and restraint.
      </Reveal>
      <Reveal delay={0.16} className="col-span-4 mt-8 md:col-span-3 md:col-start-3 lg:col-span-2 lg:col-start-11">
        <Button
          href="#contact"
          className="min-w-30 gap-4 justify-self-start lg:justify-self-end"
          aria-label="Go to contact links"
        >
          link
          <span aria-hidden="true">→</span>
        </Button>
      </Reveal>
    </section>
  );
}

export default ManifestoSection;
