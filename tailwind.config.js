/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        teal: {
          primary: '#00D4A8',
          hover: '#00BF97',
          dark: '#00A882',
          muted: '#00D4A8/10'
        },
        dark: {
          bg: '#0A0B10',
          card: '#0F1117',
          elevated: '#111318',
          border: '#1A1D28'
        },
        muted: '#8B8FA8',
        faint: '#4B5063'
      },
      backgroundImage: {
        'teal-gradient':
          'linear-gradient(135deg, #00D4A8 0%, #00BF97 50%, #00A882 100%)'
      }
    }
  },

  plugins: []
}
