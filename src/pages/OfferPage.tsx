import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SmartImage } from '@/components/SmartImage';
import { FaqList } from '@/components/FaqList';
import { CtaSection } from '@/components/CtaSection';
import { IMAGES, OFFER_FAQ } from '@/lib/content';

export function OfferPage() {
  return (
    <>
      <OfferHero />
      <NoPhotoshoot />
      <WhatYouSend />
      <WhatYouReceive />
      <Plans />
      <Process />
      <WhoFor />
      <OfferFaq />
      <CtaSection
        eyebrow="Start"
        headline={
          <>
            Your first film
            <br />
            is on us.
          </>
        }
        subtext="Send us one property. We'll send back a film. If you want more, we continue from there."
        primary={{ label: 'Get my first film free', to: '/get-started' }}
        image={IMAGES.offerPortrait}
        imageAlt={IMAGES.offerPortraitAlt}
      />
    </>
  );
}

function OfferHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.offerHero}
          alt={IMAGES.offerHeroAlt}
          loading="eager"
          decoding="async"
          className="kenburns h-full w-full object-cover opacity-25"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      </div>
      <div className="relative container-edit pt-36 pb-24 sm:pt-48 sm:pb-36">
        <Reveal>
          <p className="eyebrow mb-8 text-clay">The Offer</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="display text-5xl sm:text-7xl lg:text-8xl text-ivory">
            Your first
            <br />
            property film
            <br />
            is free.
          </h1>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-10 max-w-prose2 font-sans text-lg leading-relaxed text-ivory/70">
            One property. One cinematic film. No charge, no new photoshoot. You send what you
            already have — we send back a film.
          </p>
        </Reveal>
        <Reveal delay={350}>
          <Link
            to="/get-started"
            className="group mt-12 inline-flex items-center gap-3 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay"
          >
            Get my first film free
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function NoPhotoshoot() {
  return (
    <section className="border-t border-line bg-charcoal">
      <div className="container-edit py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-clay/40">
              <Check size={20} strokeWidth={1.25} className="text-clay" />
            </span>
            <h2 className="display text-3xl sm:text-5xl text-ivory">No new photoshoot required.</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
            We work entirely from the photography already on your listing. If you have additional
            images, send those too — but nothing new needs to be shot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhatYouSend() {
  const items = [
    'Your Airbnb or short-term-rental listing link',
    'The existing photography already on your listing',
    'Any additional images you have of the property',
  ];
  return (
    <section className="border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-8">What you send</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">
                Only what you already have.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 100}>
                  <div className="flex items-start gap-5 py-7">
                    <span className="font-sans text-xs text-smoke pt-1.5">0{i + 1}</span>
                    <span className="font-display text-xl font-light leading-snug tracking-tight text-ivory sm:text-2xl">
                      {item}
                    </span>
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

function WhatYouReceive() {
  return (
    <section className="bg-charcoal border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-8">What you receive</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ivory">
                A cinematic film of your property.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
                A short, cinematic edit — scored, paced, and graded — that moves through your space
                the way a guest would. Delivered as a shareable file, ready for your listing,
                website, and socials.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={150}>
              <SmartImage
                src={IMAGES.offerReceive}
                alt={IMAGES.offerReceiveAlt}
                ratio="4 / 5"
                className="border border-line"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: '$500',
      cadence: '/mo',
      note: 'For a focused property portfolio.',
      items: ['5 cinematic property films / month'],
    },
    {
      name: 'Growth',
      price: '$1,250',
      cadence: '/mo',
      note: 'For hosts with multiple listings.',
      items: ['10 cinematic property films / month', 'Virtual staging & photo enhancement'],
      featured: true,
    },
    {
      name: 'Full',
      price: '$2,500',
      cadence: '/mo',
      note: 'For teams that want content handled end-to-end.',
      items: ['25 cinematic property films / month', 'Virtual staging & photo enhancement', 'Social media posting'],
    },
  ];

  return (
    <section className="border-t border-line bg-charcoal">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-8 text-clay">Ongoing production</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">When one film isn&apos;t enough.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-prose2 font-sans text-sm leading-relaxed text-smoke">
                Start with the free film. If you like the result, choose the production level that fits your portfolio.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px border border-line bg-line md:grid-cols-3">
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 100}>
                  <article className={`group h-full bg-ink p-7 sm:p-8 ${plan.featured ? 'relative' : ''}`}>
                    {plan.featured && (
                      <div className="absolute right-6 top-6 text-[0.6rem] uppercase tracking-widest2 text-clay">Most popular</div>
                    )}
                    <p className="eyebrow text-smoke">{plan.name}</p>
                    <div className="mt-8 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl">{plan.price}</span>
                      <span className="font-sans text-xs text-smoke">{plan.cadence}</span>
                    </div>
                    <p className="mt-4 min-h-[3.5rem] font-sans text-sm leading-relaxed text-smoke">{plan.note}</p>
                    <ul className="mt-8 space-y-4 border-t border-line pt-6">
                      {plan.items.map((item) => (
                        <li key={item} className="flex gap-3 font-sans text-sm leading-relaxed text-ivory/75">
                          <Check size={15} strokeWidth={1.4} className="mt-0.5 shrink-0 text-clay" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={260}>
              <p className="mt-5 font-sans text-xs leading-relaxed text-smoke">
                Every plan starts with the same idea: see the work first, then decide if you want more.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', text: 'Send your listing.' },
    { n: '02', text: 'Send your existing photos.' },
    { n: '03', text: 'We create the film.' },
    { n: '04', text: 'You review it.' },
    { n: '05', text: 'Continue with paid production if you want more.' },
  ];
  return (
    <section className="border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-8">How it works</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">Five steps. One film.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="divide-y divide-line border-y border-line">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 80}>
                  <div className="flex items-baseline gap-6 py-7">
                    <span className="font-display text-2xl font-light text-charcoalLight w-12 shrink-0">
                      {step.n}
                    </span>
                    <span className="font-display text-xl font-light leading-snug tracking-tight text-ivory sm:text-2xl">
                      {step.text}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoFor() {
  const audience = ['Airbnb hosts', 'Short-term-rental operators', 'Property managers'];
  return (
    <section className="bg-charcoal border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-8">Who it&apos;s for</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">
                Anyone who lists a space for stays.
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
            <Reveal delay={300}>
              <Link
                to="/get-started"
                className="group mt-10 inline-flex items-center gap-3 font-sans text-sm tracking-wider2 text-ivory"
              >
                <span className="link-underline">Get my first film free</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferFaq() {
  return (
    <section className="border-t border-line">
      <div className="container-edit py-28 sm:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-8">Questions</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl text-ivory">FAQ</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={OFFER_FAQ} />
          </div>
        </div>
      </div>
    </section>
  );
}
