export default [
  {
    ignores: ["vendor/**", "node_modules/**", "any_other_third_party_directories/**"],
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
