import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        process: "readonly", // Define process as a global variable
        console: "readonly", // Allow use of console
        structuredClone: "readonly", // Allow use of structuredClone
      },
    },
    rules: {
      // 'no-console': 'off', // Disable the rule to allow console.log
      "no-console": "error",
      // quotes: ["error", "single", { allowTemplateLiterals: true }],
    },
  },
  pluginJs.configs.recommended,
];
