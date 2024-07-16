import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f5f5f5',
        'charcoal': '#2c3e50',
        'my-green': '#2ecc71',
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
