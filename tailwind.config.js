/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C4A7E7',
          secondary: '#1C1C1E',
          accent: '#E8E8E8',
        },
        neutral: {
          light: '#FAFAFA',
          mid: '#B8B8B8',
          dark: '#2B2B2B',
        },
        feedback: {
          success: '#28A745',
          error: '#DC3545',
          warning: '#FFC107',
          info: '#0D6EFD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
