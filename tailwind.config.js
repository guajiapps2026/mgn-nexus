/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#0A0F1C',
          900: '#0D1322',
          800: '#111827', // azul noche oficial
          700: '#172033',
          600: '#1F2A44',
        },
        gold: {
          DEFAULT: '#D8B66B', // dorado tecnológico oficial
          light: '#F2D58A',
        },
        electric: '#2563EB',
        mist: '#F3F4F6',
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D8B66B 0%, #F2D58A 55%, #D8B66B 100%)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(37,99,235,0.35), 0 0 24px -6px rgba(37,99,235,0.45)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}
