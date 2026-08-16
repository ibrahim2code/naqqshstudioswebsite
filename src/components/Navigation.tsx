import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/offer', label: 'Offer' },
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/get-started', label: 'Get Started' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-editorial ${
        scrolled || open
          ? 'bg-ink/85 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-edit flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-baseline" aria-label="NAQQSH STUDIOS home">
          <span className="font-display text-2xl tracking-tighter transition-colors duration-500 group-hover:text-clay">
            NAQQSH
          </span>
          <span className="ml-2 font-sans text-[0.6rem] uppercase tracking-widest3 text-smoke transition-colors duration-500 group-hover:text-clayLight">
            Studios
          </span>
        </Link>

        <div className="hidden items-center gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline font-sans text-sm text-ivory/70 transition-colors duration-500 hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="group inline-flex items-center gap-2 bg-ivory px-5 py-3 font-sans text-xs tracking-wider2 text-ink transition-all duration-500 hover:bg-clay"
          >
            Get Your First Film Free
            <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 p-2 text-ivory"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-editorial ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-edit flex flex-col gap-2 border-t border-line py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-3xl font-light tracking-tighter py-3 text-ivory transition-colors duration-300 hover:text-clay"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="mt-6 inline-block self-start font-sans text-sm tracking-wider2 text-ink bg-ivory px-7 py-4"
          >
            Get Your First Film Free
          </Link>
        </div>
      </div>
    </header>
  );
}
