import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1518",
          soft: "#16211F",
          line: "#22312F",
        },
        frost: {
          DEFAULT: "#F3F6F6",
          deep: "#E3EAEA",
        },
        glass: {
          DEFAULT: "#12A39A",
          deep: "#0C7C75",
          dark: "#0A5C57",
        },
        sun: {
          DEFAULT: "#E8A33D",
          deep: "#C9842A",
        },
        slate: {
          muted: "#5C6F72",
          mute2: "#8A9B9D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        page: "1180px",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-from-right": {
          "0%": { opacity: "0", transform: "translateX(28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-from-left": {
          "0%": { opacity: "0", transform: "translateX(-28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        sheen: "sheen 5.5s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
        "fade-in": "fade-in 0.2s ease-out both",
        "zoom-in": "zoom-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-from-right": "slide-from-right 0.28s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-from-left": "slide-from-left 0.28s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
