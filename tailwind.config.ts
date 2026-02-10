import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        "dark-zinc": "#09090b",
        "neon-cyan": "#00f0ff",
        "industrial-orange": "#ff4d00",
        "hud-green": "#22c55e",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "grid-move": "gridMove 20s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "glitch-1": "glitch1 2.5s infinite linear alternate-reverse",
        "glitch-2": "glitch2 3s infinite linear alternate-reverse",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scan-line": "scanLine 4s linear infinite",
      },
      keyframes: {
        gridMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50px, -50px)" },
        },
        glowPulse: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        glitch1: {
          "0%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(-3px, 2px)" },
          "20%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(3px, -1px)" },
          "40%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(-2px, 3px)" },
          "60%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(2px, -2px)" },
          "80%": { clipPath: "inset(30% 0 40% 0)", transform: "translate(-1px, 1px)" },
          "100%": { clipPath: "inset(60% 0 20% 0)", transform: "translate(1px, -3px)" },
        },
        glitch2: {
          "0%": { clipPath: "inset(60% 0 10% 0)", transform: "translate(3px, -2px)" },
          "20%": { clipPath: "inset(10% 0 60% 0)", transform: "translate(-3px, 1px)" },
          "40%": { clipPath: "inset(40% 0 30% 0)", transform: "translate(2px, -3px)" },
          "60%": { clipPath: "inset(20% 0 50% 0)", transform: "translate(-2px, 2px)" },
          "80%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(1px, -1px)" },
          "100%": { clipPath: "inset(30% 0 40% 0)", transform: "translate(-1px, 3px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
