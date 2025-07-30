import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nourd-bold": ["Nourd Bold", "sans-serif"],
        "nourd-semibold": ["Nourd SemiBold", "sans-serif"],
        "nourd-medium": ["Nourd Medium", "sans-serif"],
        "nourd-regular": ["Nourd Regular", "sans-serif"],
      },
      colors: {
        white: "#FAFAFA",
        gray: {
          light: "#3D3D3D",
          dark: "#212121",
        },
        orange: "#FFB74D",
        yellow: "#FDD835",
      },
      borderRadius: {
        xlg: "64px",
        lg: "32px",
        md: "16px",
        sm: "8px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [animate, lineClamp],
} satisfies Config;
