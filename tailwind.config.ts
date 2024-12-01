import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textWhite:"rgba(255,255,255,0.8)",
      },
      backgroundColor:{
        primary:"#3D342D"
      },
      backgroundImage: {
        'services-bg':"url('/static/services_background.jpg')",
        'secondary-bg':"linear-gradient(rgb(242, 122, 33) 0px, rgb(242, 122, 33) 0px)"
      },
      transitionProperty: {
        'background-size':'background-size'
      }
    },
  },
  plugins: [],
} satisfies Config;
