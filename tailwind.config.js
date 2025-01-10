/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E2723',  // Rich Brown
          light: '#4E342E',    // Light Brown
          dark: '#2D1810',     // Dark Brown
        },
        secondary: {
          DEFAULT: '#D7CCC8',  // Light Beige
          light: '#EFEBE9',    // Lighter Beige
          dark: '#8D6E63',     // Medium Brown
        },
        accent: {
          DEFAULT: '#795548',  // Medium Brown
          light: '#A1887F',    // Light Brown
          dark: '#4E342E',     // Dark Brown
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
