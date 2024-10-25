/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "dark",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#E6F8FA',
          100: '#C2EDF2',
          200: '#9CE1EA',
          300: '#75D5E1',
          400: '#58C9D8',
          500: '#42B0C5',
          600: '#3593A1',
          700: '#29757C',
          800: '#1E5757',
          900: '#143838',
          darkForeground: '#18181B',
          mutedForeground: '#A1A1AA',
          white: '#FAFAFA',
          disabledForeground: '#5d5c5c'
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        accent: {
          50: 'var(--accent-50) /* #F8FAFC */',
          100: 'var(--accent-100) /* #F1F5F9 */',
          200: 'var(--accent-200) /* #E2E8F0 */',
          300: 'var(--accent-300) /* #C8D5E1 */',
          400: 'var(--accent-400) /* #94A3B8 */',
          500: 'var(--accent-500) /* #64748B */',
          600: 'var(--accent-600) /* #475569 */',
          700: 'var(--accent-700) /* #334155 */',
          800: 'var(--accent-800) /* #1E293B */',
          900: 'var(--accent-900) /* #0F172A */',
          950: 'var(--accent-950) /* #020617 */',          
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
        '50%': {
            opacity: .1
        }
      }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};