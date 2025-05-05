import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared-comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8A217E", 
        secondary: "#F3E7F1",   
        accent: "#BD1181",
        alt: "#89207D",
        violet: "#632C7C",        
        magenta: "#A81780" 
      },
      fontFamily: {
        newAcademy: ['newAcademy', 'sans-serif'],
      },
      screens: {
        xs: "320px", // Extra small devices
        sm: "425px", // Small devices
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        exl: "1440px", // Extra large devices
        uws: "2560px", // Ultra-wide screens
      },
    },
  },
  plugins: [],
} satisfies Config;
