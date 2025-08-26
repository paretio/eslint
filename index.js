import pluginJs from "@eslint/js";
import pluginTs from "typescript-eslint";
import pluginGlobals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";

/** @type {any} */
const globals = {
  languageOptions: {
    globals: {
      ...pluginGlobals.browser,
    },
  },
};

/** @type {any} */
export default [
  { files: ["**/*.{ts,mts,tsx,mtsx,js,mjs}"] },
  pluginJs.configs.recommended,
  pluginStylistic.configs.recommended,
  ...pluginTs.config(pluginTs.configs.recommended),
  {
    rules: {
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    },
  },
];

export { globals };
