/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E2723', // Dark Brown
          light: '#4E342E',   // Light Brown
          dark: '#2D1810',    // Darker Brown
        },
        secondary: {
          DEFAULT: '#D7CCC8', // Light Beige
          light: '#EFEBE9',   // Lighter Beige
          dark: '#8D6E63',    // Medium Brown
        },
        accent: {
          DEFAULT: '#795548', // Medium Brown
          light: '#A1887F',   // Light Brown
          dark: '#4E342E',    // Dark Brown
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
