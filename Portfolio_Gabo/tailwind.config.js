/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customePulse: {
          '0% 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.10)' },
        },
      },
      animation: {
        customePulse: 'customePulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

