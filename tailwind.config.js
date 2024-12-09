/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: {
          100: "#F7F7F7",
          200: "#F5F5F5",
          300: "#F4F4F4",
          400: "#F3F3F3",
          500: "#F2F2F2", // Warna utama
          600: "#E2E2E2",
          700: "#D2D2D2",
          800: "#C2C2C2",
          900: "#B2B2B2",
        },
        darkGray: {
          100: "#1A1A1A",
          200: "#171717",
          300: "#141414",
          400: "#111111",
          500: "#0D0D0D", // Warna utama
          600: "#0B0B0B",
          700: "#090909",
          800: "#070707",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
