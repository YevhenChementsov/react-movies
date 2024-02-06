/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { min: '320px' },
        tablet: { min: '768px' },
        laptop: { min: '1024px' },
        default: { min: '1440px' },
      },
    },
  },
  plugins: [],
};
