import { footerLinks } from '../../data/content';
import { footerLinkColumn } from '../../lib/styles';
import logo from "../../assets/images/logo.png"
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
    <footer className="bg-blue-swiss py-16 text-white md:py-18" id="contact">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
       <div className='flex flex-col'>
        <div className="relative w-[100px] h-[100px] rounded-lg overflow-hidden border-[1px] border-[rgb(255,255,255,0.2)]">
          <img src={logo} alt="Logo" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-80" />
        </div>
         <p className="max-w-[16ch] mt-4 text-[clamp(1.8rem,6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            We build crazy <br/> stuffs
        </p>
       </div>
        <div className="flex gap-10 md:gap-16">
          <LinkColumn />
          <LinkColumn />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
