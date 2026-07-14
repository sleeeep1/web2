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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 品牌色板(蓝橙双强调色,配色方案已确认,不使用紫色)
        brand: {
          blue: "#0071E3",
          "blue-light": "#4FA8FF",
          orange: "#FF7A33",
          "orange-light": "#FFB088",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F5F7",
          dark: "#0B1220",
        },
        ink: {
          DEFAULT: "#1D1D1F",
          muted: "#6E6E73",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "PingFang SC",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        heading: [
          "var(--font-space-grotesk)",
          "var(--font-inter)",
          "-apple-system",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
