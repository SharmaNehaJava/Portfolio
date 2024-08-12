/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

