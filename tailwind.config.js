/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'IBM Plex Sans, sans-serif',
    },
    extend: {
      fontFamily: {
        plex: 'IBM Plex Sans, sans-serif',
        headline: 'Roboto, sans-serif',
      },
      colors: {
        highlight: '#232D4D',
        body: '#131B29',
        bodyLight: '#ADA1C4',
        dark: '#131017',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
