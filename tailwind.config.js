/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary:{
          light: '#FFFFFF',
          DEFAULT: '#3490DC',
          dark: '#1D3A5F',
        },
        secondary:{
          light: '#FDEDEC',
          DEFAULT: '#E3342F',
          dark: '#6B0F1A',
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#3D4852',
          dark: '#22292F',
        },
        dark:{
          background: '#090D1F',
          text: '#FFFFFF',
          primary: '#2563EB',
          secondary: '#DC2626',
        }
      }
    },
  },
  plugins: [],
}

