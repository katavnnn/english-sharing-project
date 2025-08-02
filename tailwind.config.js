/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,md,njk}",
    "./_includes/**/*.{html,md,njk}"
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient-animation 15s ease infinite',
        'subtle-float': 'subtle-float 8s ease-in-out infinite', // THÊM DÒNG NÀY
      },
      keyframes: {
        'gradient-animation': { /* ... */ },
        'subtle-float': { // THÊM KHỐI NÀY
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
},
  plugins: [],
}