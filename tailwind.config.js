/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-move': 'moveClouds 60s linear infinite',
      },
      keyframes: {
        moveClouds: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        primary: '#0e7490',
        darkPrimary: '#164e63',
        secondary: '#10b981',
        customBg: '#f5f5f5',       // light mode bg
        customText: '#1a1a1a',     // light mode text
        darkBg: '#1c1c1c',         // dark mode bg
        darkText: '#f5f5f5',       // dark mode text
      },
    },
  },
  plugins: [],
}

