import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["vendor/**", "node_modules/**"],
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "import": importPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-empty-function": "warn",
      "import/no-unused-modules": "off" // Disable or configure as needed
    },
  },
];
