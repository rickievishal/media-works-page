import { footerLinks } from '../../data/content';
import { footerLinkColumn, grid } from '../../lib/styles';

function LinkColumn({ className = '' }) {
  return (
    <div className={`${footerLinkColumn} ${className}`.trim()}>
      {footerLinks.map((link) => (
        <a key={`${link.label}-${link.href}`} className="link-underline" href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className={`${grid} min-h-96 bg-blue-swiss py-16 text-white md:py-18`} id="contact">
      <p className="col-span-4 mb-14 max-w-[11ch] text-[clamp(3rem,15vw,5.7rem)] font-black uppercase leading-[0.84] tracking-normal md:col-span-8 lg:col-span-6 lg:mb-0 lg:text-[clamp(3.2rem,8vw,9rem)]">
        design that speaks for your business
      </p>
      <LinkColumn className="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-9" />
      <LinkColumn className="col-span-4 mt-6 md:col-span-3 md:mt-0 lg:col-span-2 lg:col-start-11" />
    </footer>
  );
}

export default Footer;
