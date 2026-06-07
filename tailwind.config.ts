import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeL: { "0%": { transform:"translateX(0%)" }, "100%": { transform:"translateX(-50%)" } },
        marqueeR: { "0%": { transform:"translateX(-50%)" }, "100%": { transform:"translateX(0%)" } },
        floatY:   { "0%,100%": { transform:"translateY(0px)" }, "50%": { transform:"translateY(-14px)" } },
        pulseGlow:{ "0%,100%": { opacity:"0.6" }, "50%": { opacity:"1" } },
        spin:     { to: { transform:"rotate(360deg)" } },
        fadeSlideUp: { "0%": { opacity:"0", transform:"translateY(24px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
      },
      animation: {
        marqueeL:    "marqueeL 28s linear infinite",
        marqueeR:    "marqueeR 32s linear infinite",
        floatY:      "floatY 5s ease-in-out infinite",
        pulseGlow:   "pulseGlow 2s ease-in-out infinite",
        spin:        "spin 0.8s linear infinite",
        fadeSlideUp: "fadeSlideUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
