/** @type {import('tailwindcss').Config} */
module.exports = {
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
        
        // Semantic Global Design Tokens
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          antique: "var(--accent-antique)",
          gold: "var(--accent-gold)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // Brand Theme Tokens (Champagne & Obsidian)
        champagne: {
          gold: "#D4AF62",
          "gold-light": "#EED8A1",
          "gold-subtle": "#F4EBD0",
          antique: "#8A6A3B",
          black: "#101010",
          charcoal: "#1C1C1C",
          ivory: "#F7F3EA",
          "ivory-warm": "#EFE9DC",
          cream: "#FCFAF6",
        },
        atelier: {
          gold: "#D4AF62",
          terracotta: "#8A6A3B",
          charcoal: "#1C1C1C",
          dark: "#101010",
          bone: "#F7F3EA",
          paper: "#FCFAF6",
        },
      },
      backgroundImage: {
        // === BLACK & CHAMPAGNE GOLD SIGNATURE GRADIENTS ===
        "gradient-champagne-gold": "linear-gradient(135deg, #EED8A1 0%, #D4AF62 100%)",
        "gradient-champagne-hero": "linear-gradient(135deg, #101010 0%, #1C1C1C 60%, #8A6A3B 100%)",
        "gradient-champagne-ivory": "linear-gradient(180deg, #FCFAF6 0%, #EFE9DC 100%)",
        "gradient-champagne-card": "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(247,243,234,0.7) 100%)",
        /* Optional VOLT Gradients:
        "gradient-volt-yellow": "linear-gradient(135deg, #FFE600 0%, #FFF8C5 100%)",
        "gradient-volt-dark": "linear-gradient(135deg, #FFE600 0%, #141414 100%)",
        "gradient-volt-accent": "linear-gradient(135deg, #FF3344 0%, #FFA8B5 100%)",
        */
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Satoshi", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Satoshi", "Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
