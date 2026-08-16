import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SmartImage } from '@/components/SmartImage';
import { FaqList } from '@/components/FaqList';
import { CtaSection } from '@/components/CtaSection';
import { IMAGES, HOME_FAQ } from '@/lib/content';

export function HomePage() {
  return (
    <>
      <Hero />
      <TheIdea />
      <WhatWeCreate />
      <TheOffer />
      <HowItWorks />
      <WhoItsFor />
      <HomeFaq />
      <CtaSection
        eyebrow="Send us one property"
        headline={
          <>
            Let&apos;s see what
            <br />
            we can create.
          </>
        }
        subtext="One property. One film. No cost, no new photoshoot. If it's right for you, we continue from there."
        primary={{ label: 'Get my first film free', to: '/get-started' }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          loading="eager"
          decoding="async"
          className="kenburns h-full w-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/80" />
      </div>

      <div className="relative container-edit flex min-h-[100svh] flex-col justify-end pb-20 pt-28 sm:pb-28">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-8 text-ivory/70">NAQQSH STUDIOS — Property Films</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display text-[2.5rem] text-ivory sm:text-7xl lg:text-[6.5rem]">
              Your property
              <br />
              deserves more
              <br />
              than a photo
              <br />
              gallery.
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-10 max-w-xl font-sans text-base leading-relaxed text-ivory/70 sm:text-lg">
              We turn existing Airbnb and short-term-rental photography into cinematic property
              films — without another photoshoot.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/get-started"
                className="group inline-flex items-center justify-center gap-2.5 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay"
              >
                Get your first film free
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
                />
              </Link>
              <Link
                to="/offer"
                className="inline-flex items-center justify-center gap-2.5 border border-lineLight px-8 py-4 font-sans text-sm tracking-wider2 text-ivory transition-all duration-700 ease-editorial hover:border-ivory hover:bg-ivory/5"
              >
                See the offer
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <div className="mt-16 flex items-center gap-3 text-ivory/40">
            <span className="block h-10 w-px bg-ivory/30 animate-[scrollline_2.4s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
            <span className="font-sans text-[0.65rem] uppercase tracking-widest2">Scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TheIdea() {
  return (
    <section className="border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-8">01 — The idea</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ivory">
                Photography shows the space.
                <br />
                <span className="text-clay">Film makes people feel it.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
                A photo tells a guest what a room looks like. A film lets them walk through it
                before they arrive.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={150}>
              <SmartImage
                src={IMAGES.idea}
                alt={IMAGES.ideaAlt}
                ratio="3 / 4"
                className="border border-line"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeCreate() {
  const items = ['Airbnb listings', 'Short-term rentals', 'Property managers'];
  return (
    <section className="bg-charcoal border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-8">02 — What we create</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ivory">
                Cinematic property films.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
                Short, scored, and graded edits that move through your space the way a guest would.
                Not a slideshow.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 100}>
                  <div className="flex items-baseline justify-between py-7">
                    <span className="font-display text-2xl font-light tracking-tight text-ivory sm:text-3xl">
                      {item}
                    </span>
                    <span className="font-sans text-xs text-smoke">0{i + 1}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheOffer() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <img
          src={IMAGES.offer}
          alt={IMAGES.offerAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-30"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      </div>
      <div className="relative container-edit py-32 sm:py-48">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-8 text-clay">03 — The offer</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-5xl sm:text-7xl lg:text-8xl text-ivory">
              Your first
              <br />
              property film
              <br />
              is free.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 max-w-prose2 font-sans text-lg leading-relaxed text-ivory/70">
              Send us one property and its existing photography. We&apos;ll turn it into a cinematic
              film for you to review.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                to="/get-started"
                className="group inline-flex items-center gap-3 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay"
              >
                Get my first film free
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
                />
              </Link>
              <Link to="/offer" className="link-underline font-sans text-sm text-ivory/65 transition-colors duration-500 hover:text-ivory">
                See ongoing plans — from $500/mo
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', label: 'Send', text: 'Your listing + existing photos.' },
    { n: '02', label: 'Create', text: 'We produce the cinematic property film.' },
    { n: '03', label: 'Review', text: 'You decide whether you want more.' },
  ];
  return (
    <section id="how-it-works" className="border-t border-line scroll-mt-20">
      <div className="container-edit py-28 sm:py-44">
        <Reveal>
          <p className="eyebrow mb-8">04 — How it works</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Send. Create. Review.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px border-y border-line bg-line sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="h-full bg-ink px-8 py-12 sm:px-10 sm:py-14">
                <span className="font-display text-6xl font-light text-charcoalLight">
                  {step.n}
                </span>
                <h3 className="mt-8 font-display text-3xl font-light tracking-tight text-ivory">
                  {step.label}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-smoke">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const audience = ['Airbnb hosts', 'Short-term-rental operators', 'Property managers'];
  return (
    <section className="bg-charcoal border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-8">05 — Who it&apos;s for</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">
                Built for people who list spaces.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {audience.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 100}>
                  <div className="flex items-center justify-between py-8">
                    <span className="font-display text-2xl font-light tracking-tight text-ivory sm:text-3xl">
                      {a}
                    </span>
                    <span className="font-sans text-xs text-smoke">0{i + 1}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-8">06 — Questions</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">FAQ</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={HOME_FAQ} />
          </div>
        </div>
      </div>
    </section>
  );
}
