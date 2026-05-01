/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Premium White Mode base
        ivory: {
          50: '#FDFDFC',
          100: '#F9F9F8',
          200: '#F2F2F0',
          300: '#EBEBE8',
          400: '#D5D5D1',
          500: '#A3A39D',
          600: '#8A8A85',
          700: '#5C5C58',
          800: '#2C2C2A', // text color in light mode
          900: '#1A1A18', // headings in light mode
        },
        // Premium Dark Mode base
        charcoal: {
          50: '#F2F2F3', // text in dark mode
          100: '#E6E6E8', // headings in dark mode
          200: '#C2C2C6',
          300: '#9E9EA4',
          400: '#7A7A82',
          500: '#565660',
          600: '#404048',
          700: '#2A2B30', // elevated surfaces
          800: '#1E1E22', // secondary bg
          900: '#121214', // main bg
        },
        // Accents (no default blue)
        accent: {
          emerald: '#10B981', // green accent
          violet: '#8B5CF6',  // purple accent
          gold: '#F59E0B',    // gold accent
          slate: '#64748B',   // neutral accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'premium-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
