/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "sm":	"640px",
      "md":	"768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: { 
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonsColor: "#FFD397",
        buttonHoverColor: "#F1C07C",
        text: "#BB8D5A",
        brown: "#71493D",
        logoColor: "#FBE5C6"
      },
      fontFamily:{
        Garmania: "Germania One",
        MadievalSharp: "MedievalSharp"
      }
    },
  },
  plugins: [],
};
