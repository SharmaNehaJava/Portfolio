/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a1a2e",
        darkCard: "#162447",
        primary: "#1f4068",
        accent: "#e43f5a",
      },
      keyframes: {
        slideText: {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        slideText: 'slideText 15s linear infinite',
      },
    },
  },
  plugins: [
  ],
}

