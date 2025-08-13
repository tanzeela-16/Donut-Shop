/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
         lobster: ['Lobster', 'cursive'],
        cursive2: ["Sriracha", "cursive"],
        playful: ["Comic Neue", "cursive"], // Add this for extra pop
      },
      colors: {
        primary: "#D477A3",       // Frosted Berry Pink
        secondary: "#7E6BC4",     // Soft Violet Glaze
        accent: "#88D9E6",        // Icy Mint Blue
        chocolate: "#5E4B8B",     // Deep Violet (non-brown base)
        cream: "#FBEFF5",         // Light Creamy Pink
        pinky: "#FF6F91",         // Bright Glaze Pink
        berry: "#A06DA6",         // Berry Purple
        sprinkle: "#F8B195",      // Sprinkle Peach
        dark: "#1A1A2E",          // Night Blue (contrast base)
        light: "#FFF0F6",         // Light Frost Background
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "bounce-slow": "bounce 3s infinite ease-in-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
