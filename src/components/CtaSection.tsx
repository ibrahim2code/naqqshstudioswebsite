import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SmartImage } from '@/components/SmartImage';
import { IMAGES } from '@/lib/content';

type CtaSectionProps = {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  headline: ReactNode;
  subtext?: string;
  primary: { label: string; to: string };
};

export function CtaSection({
  image = IMAGES.finalCta,
  imageAlt = IMAGES.finalCtaAlt,
  eyebrow = 'Start',
  headline,
  subtext,
  primary,
}: CtaSectionProps) {
  return (
    <section className="container-edit py-24 sm:py-36">
      <Reveal>
        <p className="eyebrow mb-8">{eyebrow}</p>
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display text-[2.75rem] sm:text-6xl lg:text-7xl text-ivory">{headline}</h2>
          </Reveal>
          {subtext && (
            <Reveal delay={120}>
              <p className="mt-8 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
                {subtext}
              </p>
            </Reveal>
          )}
          <Reveal delay={200}>
            <Link
              to={primary.to}
              className="group mt-12 inline-flex items-center gap-3 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay"
            >
              {primary.label}
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
              />
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={150}>
            <SmartImage
              src={image}
              alt={imageAlt}
              ratio="4 / 5"
              className="border border-line"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
