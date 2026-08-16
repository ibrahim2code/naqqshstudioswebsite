import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Instagram, Mail } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CONTACT } from '@/lib/content';

export function GetStartedPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [listing, setListing] = useState('');
  const [properties, setProperties] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Free first property film — request');
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Airbnb / listing link: ${listing || '—'}`,
        `Number of properties: ${properties || '—'}`,
        ``,
        message,
      ].join('\n')
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="container-edit pt-36 pb-24 sm:pt-48 sm:pb-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-8 text-clay">Get Started</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display text-4xl sm:text-5xl lg:text-6xl text-ivory">
              Send us one property.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-prose2 font-sans text-base leading-relaxed text-smoke">
              Tell us a little about your listing. We&apos;ll reply with how to send your photos and
              get your first film started — no cost, no new shoot.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 space-y-5 border-t border-line pt-10">
              <p className="eyebrow">Or reach us directly</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-2.5 font-sans text-sm text-ivory/70 hover:text-ivory transition-colors"
              >
                <Mail size={16} strokeWidth={1.25} />
                <span className="link-underline">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-sans text-sm text-ivory/70 hover:text-ivory transition-colors"
              >
                <Instagram size={16} strokeWidth={1.25} />
                <span className="link-underline">{CONTACT.instagramHandle}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            {submitted ? (
              <div className="border border-line bg-charcoal px-8 py-16 text-center sm:px-16">
                <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-clay/40">
                  <Check size={20} strokeWidth={1.25} className="text-clay" />
                </div>
                <h2 className="font-display text-3xl font-light tracking-tight text-ivory">
                  Your email is ready.
                </h2>
                <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-smoke">
                  Your email client should have opened with your details. Hit send and we&apos;ll
                  reply shortly with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-sm text-ivory link-underline"
                >
                  Edit my details
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-line bg-charcoal p-6 sm:p-10"
              >
                <div className="space-y-8">
                  <Field label="Your name" required>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="field-input"
                      placeholder="Jordan Avery"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field-input"
                      placeholder="you@email.com"
                    />
                  </Field>
                  <Field label="Airbnb / listing link">
                    <input
                      type="url"
                      value={listing}
                      onChange={(e) => setListing(e.target.value)}
                      className="field-input"
                      placeholder="https://airbnb.com/..."
                    />
                  </Field>
                  <Field label="How many properties do you manage?">
                    <input
                      type="text"
                      value={properties}
                      onChange={(e) => setProperties(e.target.value)}
                      className="field-input"
                      placeholder="e.g. 3"
                    />
                  </Field>
                  <Field label="Anything else?">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="field-input resize-none"
                      placeholder="Tell us about your property or goals."
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-ivory px-8 py-4 font-sans text-sm tracking-wider2 text-ink transition-all duration-700 ease-editorial hover:bg-clay sm:w-auto"
                >
                  Request your free film
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                  />
                </button>
                <p className="mt-4 font-sans text-xs text-smoke">
                  No new photoshoot required. We&apos;ll reply within a few days.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 font-sans text-xs text-smoke">
              Prefer to read first?{' '}
              <Link to="/offer" className="link-underline text-ivory">
                See the offer
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-3 block">
        {label}
        {required ? <span className="text-clay"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
