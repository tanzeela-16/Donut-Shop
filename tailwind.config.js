/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        lobster: ["Lobster", "cursive"],
        cursive2: ["Sriracha", "cursive"],
        playful: ["Comic Neue", "cursive"],
      },
      colors: {
        primary: "#8b3f3f",       // Deep warm reddish brown (Hero background)
        secondary: "#da5b5b",     // Deep berry red (gradient end)
        accent: "#e18c8c",        // Soft warm pink (gradient start)
        cream: "#fdf3e7",         // Soft cream background
        light: "#fff5f5",         // Light pinkish background for contrast
        gold: "#f6c177",          // Warm golden accent
        chocolate: "#5a3e36",     // Rich chocolate brown for depth
        berry: "#b84d4d",         // Darker berry red for hover/contrast
        textDark: "#2e1e1e",      // Deep text color
        textLight: "#ffffff",     // White text
        subText: "rgba(255,255,255,0.8)", // Semi-transparent white
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
        float: "float 6s ease-in-out infinite",
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
