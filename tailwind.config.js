/** @type {import('tailwindcss').Config} */
export default {
  // include index.html and common source file extensions so Tailwind can
  // detect class names in your React components
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}