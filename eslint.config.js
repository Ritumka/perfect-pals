import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["vendor/**", "node_modules/**"],
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: typescriptParser, // Use the imported parser object
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-empty-function": "warn"
    },
  },
];
