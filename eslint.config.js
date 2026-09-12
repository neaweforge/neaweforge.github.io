import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

// Flat config (ESLint 10). Type-aware linting is deliberately not enabled:
// `npm run typecheck` already runs the full TypeScript compiler over the same
// files with strict settings, so turning it on here would duplicate that work
// on every lint run for no extra coverage.
export default tseslint.config(
  { ignores: ["build/", ".react-router/", "node_modules/"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    files: ["scripts/**/*.mjs", "*.config.ts", "*.config.js"],
    languageOptions: { globals: globals.node },
  },
);
