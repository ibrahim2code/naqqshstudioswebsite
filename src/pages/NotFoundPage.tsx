import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function NotFoundPage() {
  return (
    <section className="container-edit flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <Reveal>
        <p className="eyebrow mb-8 text-clay">404</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display text-5xl sm:text-7xl text-ivory">Page not found.</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-smoke">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <Link
          to="/"
          className="group mt-12 inline-flex items-center gap-3 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay"
        >
          Back to home
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
          />
        </Link>
      </Reveal>
    </section>
  );
}
