/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FEFBF7',
        'warm-gray': '#F5F1ED',
        'sage': '#A0AFA3',
        'muted-blue': '#8B9FA8',
        'warm-brown': '#9B8B7E',
        'text-dark': '#2C2C2C',
      },
      fontFamily: {
        'sans': ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
