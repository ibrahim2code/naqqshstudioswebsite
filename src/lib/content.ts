export const IMAGES = {
  hero: 'https://images.pexels.com/photos/3137084/pexels-photo-3137084.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Striking minimalist modern architectural facade against a dark sky.',
  idea: 'https://images.pexels.com/photos/29601015/pexels-photo-29601015.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ideaAlt: 'Dark industrial corridor with geometric lines and subtle lighting.',
  create1: 'https://images.pexels.com/photos/13722886/pexels-photo-13722886.jpeg?auto=compress&cs=tinysrgb&w=1200',
  create1Alt: 'Sleek modern living room with dark tones and ambient lighting.',
  create2: 'https://images.pexels.com/photos/34549311/pexels-photo-34549311.jpeg?auto=compress&cs=tinysrgb&w=1200',
  create2Alt: 'Modern interior with warm lighting and wood tones.',
  offer: 'https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&w=1600',
  offerAlt: 'Modern luxury villa at dusk with an illuminated swimming pool.',
  offerPortrait: 'https://images.pexels.com/photos/13722888/pexels-photo-13722888.jpeg?auto=compress&cs=tinysrgb&w=1200',
  offerPortraitAlt: 'Sleek modern living room with dark tones and elegant furniture.',
  finalCta: 'https://images.pexels.com/photos/28054849/pexels-photo-28054849.jpeg?auto=compress&cs=tinysrgb&w=1600',
  finalCtaAlt: 'Elegant stone villa with infinity pool at twilight.',
  offerHero: 'https://images.pexels.com/photos/36394726/pexels-photo-36394726.jpeg?auto=compress&cs=tinysrgb&w=1600',
  offerHeroAlt: 'Luxurious modern villa with a serene poolside view during twilight.',
  offerReceive: 'https://images.pexels.com/photos/13722826/pexels-photo-13722826.jpeg?auto=compress&cs=tinysrgb&w=1200',
  offerReceiveAlt: 'Elegant living room with modern luxury design and ambient lighting.',
  offerProcess: 'https://images.pexels.com/photos/34549325/pexels-photo-34549325.jpeg?auto=compress&cs=tinysrgb&w=1200',
  offerProcessAlt: 'Contemporary minimalist living room with black leather sofa.',
} as const;

export const CONTACT = {
  instagram: 'https://www.instagram.com/naqqsh.studios/',
  instagramHandle: '@naqqsh.studios',
  email: 'naqqshstudios@gmail.com',
  website: 'naqqshstudios.com',
} as const;

export type FaqItem = { q: string; a: string };

export const HOME_FAQ: FaqItem[] = [
  {
    q: 'Do I need a new photoshoot?',
    a: 'No. We work entirely from the photography you already have — your existing listing photos and any additional images you can send.',
  },
  {
    q: 'What exactly is a property film?',
    a: 'A short, cinematic edit that moves through your space the way a guest would. Scored, paced, and graded like a film — not a slideshow.',
  },
  {
    q: 'How long does it take?',
    a: 'Most first films are delivered within a few days of receiving your listing and photos.',
  },
  {
    q: 'What happens after the free film?',
    a: 'If you want more — additional properties, different cuts, ongoing content — we continue with paid production. No obligation.',
  },
];

export const OFFER_FAQ: FaqItem[] = [
  {
    q: 'Is the first film really free?',
    a: 'Yes. One property, one film, no charge. If you want more after that, we continue with paid production. No obligation.',
  },
  {
    q: 'What photos do I need to send?',
    a: 'Your existing Airbnb or listing photography — the images already on your listing. If you have additional shots, send those too. No new shoot required.',
  },
  {
    q: 'How do you make a film from photos?',
    a: 'We study the space through your images, then build a cinematic edit — motion, pacing, grade, and sound design — that lets a viewer feel the property.',
  },
  {
    q: 'What do I receive?',
    a: 'A short cinematic film, delivered as a shareable file, ready for your listing, website, and socials.',
  },
  {
    q: 'What if I manage multiple properties?',
    a: 'Start with one. The free film lets you see exactly what we do before deciding to continue.',
  },
];
