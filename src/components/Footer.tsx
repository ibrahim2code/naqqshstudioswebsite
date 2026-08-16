import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="container-edit py-20 sm:py-28">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link to="/" className="flex items-baseline">
              <span className="font-display text-4xl tracking-tighter">NAQQSH</span>
              <span className="ml-2.5 font-sans text-[0.65rem] uppercase tracking-widest3 text-smoke">
                Studios
              </span>
            </Link>
            <p className="mt-7 max-w-sm font-display text-2xl font-light leading-snug tracking-tight text-ivory/75">
              Cinematic property films for Airbnb and short-term-rental businesses.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3.5 font-sans text-sm">
              <li>
                <Link to="/offer" className="link-underline text-ivory/70 hover:text-ivory">
                  The Offer
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="link-underline text-ivory/70 hover:text-ivory">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="link-underline text-ivory/70 hover:text-ivory">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-3.5 font-sans text-sm">
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ivory/70 hover:text-ivory"
                >
                  <Instagram size={15} strokeWidth={1.25} />
                  {CONTACT.instagramHandle}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.25}
                    className="opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 text-ivory/70 hover:text-ivory"
                >
                  <Mail size={15} strokeWidth={1.25} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-smoke">
            © {new Date().getFullYear()} NAQQSH STUDIOS. All rights reserved.
          </p>
          <p className="font-sans text-xs text-smoke">{CONTACT.website}</p>
        </div>
      </div>
    </footer>
  );
}
