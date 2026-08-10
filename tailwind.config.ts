import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF6E7",
        "bg-2": "#F4DDC0",
        surface: "#FFFBF4",
        border: "#E8C9A9",
        cream: "#35212E",
        "cream-dim": "#5A424B",
        gold: "#B26B2B",
        "gold-bright": "#D9923E",
        "gold-pale": "#F7E2C7",
      },
      fontFamily: {
        logo: ["Barbra", "var(--font-logo)", "serif"],
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
