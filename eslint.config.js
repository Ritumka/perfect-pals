export default [
  {
    ignores: ["vendor/javascript/**"],
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
