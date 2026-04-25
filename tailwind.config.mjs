/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        void: "#0a0a0f",
        surface: "#13131f",
        "surface-hover": "#1a1a2e",
        cyan: "#22d3ee",
        amber: "#fbbf24",
        "text-primary": "#e2e8f0",
        "text-secondary": "#64748b",
        border: "#1e293b"
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

