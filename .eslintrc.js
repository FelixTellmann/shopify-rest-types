module.exports = {
  env: {
    browser: true,
  },
  extends: ["./node_modules/fx-style/"],
  ignorePatterns: ["public/**/*", "*.md", "*.mdx", "amplify/**/*"],
  plugins: ["sort-keys-fix"],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended"],
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "typescript-sort-keys/interface": 0 /*["error", "asc", { caseSensitive: true, natural: true, requiredFirst: true }],*/,
        "typescript-sort-keys/string-enum": 0 /*["error", "asc", { caseSensitive: true }]*/,
      },
    },
  ],
  rules: {
    "sort-keys-fix/sort-keys-fix": 0,
    "import/no-anonymous-default-export": 0,
  },
};
