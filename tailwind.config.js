/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: { 
    extend: { 
      "colors": { 
        "on-surface": "#0f172a", 
        "on-tertiary-fixed": "#002109", 
        "error": "#ba1a1a", 
        "on-surface-variant": "#475569", 
        "surface": "#ffffff", 
        "surface-container-high": "#f1f5f9", 
        "on-primary-container": "#ffffff", 
        "on-background": "#0f172a", 
        "surface-container": "#f8fafc", 
        "on-tertiary": "#ffffff", 
        "on-primary": "#ffffff", 
        "outline-variant": "#e2e8f0", 
        "outline": "#cbd5e1", 
        "surface-bright": "#ffffff", 
        "secondary": "#22c55e", 
        "primary": "#e11d2e", 
        "primary-dark": "#b81524", 
        "surface-container-lowest": "#ffffff", 
        "background": "#ffffff" 
      }, 
      "borderRadius": { 
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "2xl": "1rem", 
        "3xl": "1.5rem", 
        "full": "9999px" 
      }, 
      "spacing": { 
        "space-xs": "0.375rem", 
        "gutter-mobile": "1rem", 
        "margin-mobile": "1.25rem", 
        "margin": "3rem", 
        "space-sm": "0.75rem", 
        "space-md": "1.25rem", 
        "gutter": "1.5rem", 
        "space-lg": "2rem", 
        "space-xl": "3.5rem" 
      }, 
      "fontFamily": { 
        "body-lg": [ "Inter" ], 
        "label-sm": [ "Exo 2", "sans-serif" ], 
        "label-md": [ "Exo 2", "sans-serif" ], 
        "body-sm": [ "Inter" ], 
        "label-lg": [ "Exo 2", "sans-serif" ], 
        "display-hero": [ "Exo 2", "sans-serif" ], 
        "display-hero-mobile": [ "Exo 2", "sans-serif" ], 
        "headline-lg": [ "Exo 2", "sans-serif" ], 
        "headline-sm": [ "Exo 2", "sans-serif" ], 
        "headline-md": [ "Exo 2", "sans-serif" ], 
        "body-md": [ "Inter" ], 
        "headline-xl": [ "Exo 2", "sans-serif" ] 
      }, 
      "fontSize": { 
        "body-lg": [ "18px", { "lineHeight": "28px", "fontWeight": "400" } ], 
        "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.06em", "fontWeight": "700" } ], 
        "label-md": [ "12px", { "lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "600" } ], 
        "display-hero-mobile": [ "36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800" } ], 
        "body-sm": [ "13px", { "lineHeight": "20px", "fontWeight": "400" } ], 
        "label-lg": [ "14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600" } ], 
        "display-hero": [ "56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "800" } ], 
        "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" } ], 
        "headline-sm": [ "20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], 
        "headline-md": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], 
        "body-md": [ "15px", { "lineHeight": "24px", "fontWeight": "400" } ], 
        "headline-xl": [ "38px", { "lineHeight": "46px", "letterSpacing": "-0.025em", "fontWeight": "700" } ] 
      },
      "keyframes": {
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        }
      },
      "animation": {
        "marquee-right": "marquee-right 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
      }
    } 
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
