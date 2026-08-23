import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { container } from '../../lib/styles';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-smooth ${
          isScrolled
            ? 'bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
        aria-label="Primary navigation"
      >
        <div className={`${container} flex items-center justify-between py-4 md:py-5`}>
          {/* Logo */}
          <a
            href="#top"
            className="text-xl font-bold tracking-tight text-neutral-900"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            MediaWorks
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Talk With Us
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block h-0.5 w-6 bg-neutral-900"
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 4 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-neutral-900"
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -4 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-semibold text-neutral-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                <Button
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Talk With Us
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
