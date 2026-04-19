import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Blues ──────────────────────────────────────────────
        primary: '#003f87',
        'primary-container': '#0056b3',
        'primary-fixed': '#d7e2ff',
        'primary-light': '#4d8fd4',
        'on-primary': '#ffffff',

        // ── Premium Gold (luxury accent) ─────────────────────────────
        gold: '#c9a56a',
        'gold-light': '#f4e8ca',
        'gold-muted': '#8a6d3e',
        'gold-bright': '#e8c07a',

        // ── Premium Dark (replaces on-surface for dark sections) ─────
        deep: '#0b0d16',
        'deep-2': '#131621',
        'deep-3': '#1c1f2e',
        'deep-4': '#252838',

        // ── Warm Cream (premium light backgrounds) ───────────────────
        cream: '#fdfcf6',
        'cream-2': '#f5f3ec',

        // ── Semantic / Clinical ───────────────────────────────────────
        secondary: '#006e25',
        'secondary-container': '#80f98b',
        'secondary-fixed': '#83fc8e',
        'secondary-fixed-dim': '#66df75',
        'on-secondary': '#ffffff',
        tertiary: '#88000e',
        'tertiary-container': '#b1121b',
        'tertiary-fixed': '#ffdad6',
        'on-tertiary': '#ffffff',

        // ── Surface Hierarchy ─────────────────────────────────────────
        background: '#fdfcf6',
        surface: '#fdfcf6',
        'surface-lowest': '#ffffff',
        'surface-low': '#f5f3ec',
        'surface-container': '#edeae2',
        'surface-high': '#e7e4dc',
        'surface-highest': '#e1ddd5',

        // ── Text ──────────────────────────────────────────────────────
        'on-surface': '#111318',
        'on-surface-variant': '#3d4150',
        outline: '#6e7280',
        'outline-variant': '#c4c7d4',
        error: '#ba1a1a',
      },

      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },

      fontSize: {
        'display-2xl': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-xl': ['5.5rem', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
        'display-lg': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0056b3, #003f87)',
        'gradient-deep': 'linear-gradient(160deg, #0b0d16, #131621)',
        'gradient-gold': 'linear-gradient(135deg, #c9a56a, #e8c07a)',
        'gradient-photo-l': 'linear-gradient(to right, #0b0d16 0%, rgba(11,13,22,0.85) 40%, rgba(11,13,22,0.2) 75%, transparent 100%)',
        'gradient-photo-b': 'linear-gradient(to top, rgba(11,13,22,0.9) 0%, rgba(11,13,22,0.5) 40%, transparent 100%)',
        'gradient-card-b': 'linear-gradient(to top, rgba(11,13,22,0.95) 0%, rgba(11,13,22,0.6) 50%, transparent 100%)',
        'gradient-subtle': 'linear-gradient(180deg, transparent, rgba(25,27,34,0.04))',
        'gradient-secondary': 'linear-gradient(135deg, #006e25, #66df75)',
      },

      boxShadow: {
        'xs': '0 2px 8px rgba(17,19,24,0.06)',
        'sm': '0 4px 16px rgba(17,19,24,0.08)',
        'md': '0 8px 32px rgba(17,19,24,0.10)',
        'lg': '0 16px 48px rgba(17,19,24,0.12)',
        'xl': '0 24px 64px rgba(17,19,24,0.14)',
        '2xl': '0 40px 80px rgba(17,19,24,0.18)',
        'glow-blue': '0 0 60px rgba(0,63,135,0.18)',
        'glow-gold': '0 0 60px rgba(201,165,106,0.20)',
        'card': '0 4px 24px rgba(17,19,24,0.07)',
        'card-lift': '0 20px 60px rgba(17,19,24,0.14)',
        'card-gold': '0 20px 60px rgba(201,165,106,0.12)',
        // legacy names kept for compatibility
        ambient: '0 12px 40px rgba(25,27,34,0.06)',
        'ambient-md': '0 16px 48px rgba(25,27,34,0.10)',
        'ambient-lg': '0 24px 64px rgba(25,27,34,0.14)',
        'card-hover': '0 20px 60px rgba(0,63,135,0.12)',
      },

      backdropBlur: {
        nav: '20px',
        xs: '4px',
        sm: '8px',
      },

      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'line-grow': 'lineGrow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },

      letterSpacing: {
        'ultra': '0.35em',
        'widest-2': '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
