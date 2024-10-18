/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Extend maxWidth di breakpoint tertentu
      container: {
        center: true,
        padding: "1rem", // Tambahkan padding jika diperlukan
        screens: {
          sm: "640px", // Gunakan default untuk sm
          md: "768px", // Gunakan default untuk md
          lg: "1024px", // Gunakan default untuk lg
          xl: "1130px", // Custom max-width di breakpoint xl
          "2xl": "1130px", // Misalnya untuk breakpoint terbesar
        },
      },
      colors: {
        "black-background": "#000000",
        "black-button": "#323437",
        "black-panel": "#141414",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A8A8A8",
        "accent": "#FF9357",
      },
    },
  },
  plugins: [],
};
