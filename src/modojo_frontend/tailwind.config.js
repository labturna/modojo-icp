/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-bg': '#000000',       // Black background
        'dark-gray': '#1a1a1a',      // Dark gray for cards and sidebars
        'gray': '#2a2a2a',           // Gray for text and other elements
        'light-gray': '#4d4d4d',     // Light gray for hover effects and accents
        'blue': '#4C95E5',           // Dfinity blue for accents
      },
      fontSize: {
        'xs': '0.75rem',    // Smaller size
        'sm': '0.875rem',   // Small size
        'base': '1rem',     // Base size
        'lg': '1.125rem',   // Large size
        'xl': '1.25rem',    // Extra large size
        '2xl': '1.5rem',    // 2x extra large size
        '3xl': '1.875rem',  // 3x extra large size
        '4xl': '2.25rem',   // 4x extra large size
        '5xl': '3rem',      // 5x extra large size
        '6xl': '3.75rem',   // 6x extra large size
      },
    },
  },
  plugins: [],
}
