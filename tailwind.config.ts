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
        backgroundShade: "var(--background-shade)",
        textColor: "var(--textColor)",
        btnColor: "var(--btnColor)",
        btnText: "var(--btnText)",
        border: "var(--border)"
      },
      padding: {
        md: "20px",
        sm: "10px",
        lg: "40px"

      },
      margin: {
        md: "2rem",
        sm: "1rem"
      }
    },
  },
  plugins: [],
} satisfies Config;


