/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0B0A',
        charcoal: '#161413',
        charcoalLight: '#1E1C1A',
        ivory: '#E8E2D6',
        clay: '#B8916A',
        clayLight: '#C9A682',
        smoke: '#7D766C',
        line: '#2A2724',
        lineLight: '#3A3631',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wider2: '0.06em',
        widest2: '0.16em',
        widest3: '0.24em',
      },
      maxWidth: {
        editorial: '1440px',
        prose2: '560px',
        wide: '960px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
