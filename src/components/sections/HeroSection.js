import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { container } from '../../lib/styles';

function HeroSection() {
  return (
    <section
      className="min-h-screen pt-24 md:pt-32"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className={`${container} flex flex-col items-center gap-12 lg:flex-row lg:gap-16`}>
        {/* Left — text */}
        <div className="flex-1 pt-8 lg:pt-16">
          <Reveal as="h1" id="hero-title" className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.5rem] xl:text-6xl">
            Websites that make your business look as good online as it does offline.
          </Reveal>

          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500 md:text-lg"
          >
            MediaWorks helps businesses build modern, responsive and customized websites that turn their online presence into a real business asset.
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#contact">
              Start your project
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="#work" variant="outline">
              View our work
            </Button>
          </Reveal>
        </div>

        {/* Right — image */}
        <Reveal
          delay={0.15}
          className="flex-1 lg:flex lg:justify-end"
        >
          <img
            src="/images/hero-mockup.jpg"
            alt="Collection of modern website designs displayed on desktop, laptop, and mobile devices"
            className="w-full max-w-lg rounded-sm object-cover lg:max-w-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
