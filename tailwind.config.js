/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["Poppins-regular", "sans-serif"],
        poppinsMedium: ["Poppins-medium", "sans-serif"],
      }
    },
  },
  plugins: [],
}

