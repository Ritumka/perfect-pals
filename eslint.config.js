export default [
  {
    ignores: ["vendor/**", "node_modules/**"],
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  },
];
