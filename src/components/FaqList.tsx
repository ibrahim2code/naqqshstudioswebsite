import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { type FaqItem } from '@/lib/content';
import { Reveal } from '@/components/Reveal';

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal as="div" key={item.q} delay={i * 50}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-xl font-light tracking-tight transition-colors duration-300 sm:text-2xl ${
                  isOpen ? 'text-ivory' : 'text-ivory/80'
                }`}
              >
                {item.q}
              </span>
              <span className={`mt-1 shrink-0 transition-colors duration-300 ${isOpen ? 'text-clay' : 'text-smoke'}`}>
                {isOpen ? <Minus size={18} strokeWidth={1.25} /> : <Plus size={18} strokeWidth={1.25} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-editorial ${
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose2 font-sans text-[0.95rem] leading-relaxed text-smoke">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
