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
        'text-dark': '#152724',
        forest: '#234d3f',
        'forest-dark': '#1f473b',
        'forest-soft': '#d9eee4',
        muted: '#556d66',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(35, 77, 63, 0.12)',
      },
      fontFamily: {
        serif: ['Georgia', 'Merriweather', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
