// @ts-check
import nextPlugin from "@next/eslint-plugin-next";
import drizzlePlugin from "eslint-plugin-drizzle";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Mirrors `next/core-web-vitals` (eslint-config-next 15.5.3), which is
  // eslintrc-only and so cannot be extended directly under ESLint 10. The rule
  // set below is transcribed from that package rather than approximated with
  // each plugin's own `recommended` preset, which is broader.
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": a11yPlugin,
    },
    settings: {
      // Pinned rather than "detect": eslint-plugin-react's version detection
      // calls context.getFilename(), which ESLint 10 removed.
      react: { version: "19.1" },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // eslint-config-next pins react-hooks 5, whose recommended set is exactly
      // these two rules. Listing them keeps the installed react-hooks 7 from
      // adding rules that next/core-web-vitals never enforced.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",

      "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },

  // Project rules, carried over verbatim from the previous .eslintrc.cjs.
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    plugins: { drizzle: drizzlePlugin },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
    },
  },

  // Config files are not covered by the app's tsconfig project.
  {
    files: ["*.{js,cjs,mjs}", "eslint.config.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
);
