import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        process: 'readonly', // Define process as a global variable
        console: 'readonly', // Allow use of console
        structuredClone: 'readonly', // Allow use of structuredClone
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Include recommended rules from `@eslint/js`
      'prettier/prettier': 'error', // Enable Prettier rules
      // 'no-console': 'off', // Disable the rule to allow console.log
      'no-console': 'error',
      // quotes: ["error", "single", { allowTemplateLiterals: true }],
    },
  },
  pluginJs.configs.recommended,
];
