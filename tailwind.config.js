module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdf8f2',
        sand: '#f4e8dc',
        surface: '#f7f2eb',
        'surface-strong': '#e7d9c8',
        'text-dark': '#12243a',
        forest: '#1e4d7a',
        'forest-dark': '#1a447a',
        'forest-soft': '#dce8f5',
        muted: '#4d6b87',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(30, 77, 122, 0.12)',
      },
      fontFamily: {
        serif: ['Georgia', 'Merriweather', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
