import { grid } from '../../lib/styles';

function Header() {
  return (
    <header
      className={`${grid} sticky top-0 z-20 min-h-10 items-center border-b border-blue-swiss bg-paper/90 py-3 text-xs font-extrabold uppercase leading-none backdrop-blur md:py-0`}
      aria-label="Primary navigation"
    >
      <a className="link-underline col-span-4 text-blue-swiss md:col-span-3" href="#top">
        MediaWorks
      </a>
      <nav className="col-span-4 mt-2 flex justify-start gap-4 md:col-span-5 md:mt-0 md:justify-end md:gap-8 lg:col-span-5 lg:col-start-8 lg:gap-10">
        <a className="link-underline" href="#work">
          works
        </a>
        <a className="link-underline" href="#services">
          services
        </a>
        <a className="link-underline" href="#contact">
          contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
