module.exports = {
  env: {
    browser: true,
  },
  extends: ["./node_modules/fx-style/"],
  ignorePatterns: ["public/**/*", "*.md", "*.mdx", "amplify/**/*"],
  plugins: ["sort-keys-fix"],
  rules: {
    "sort-keys-fix/sort-keys-fix": 0,
    "import/no-anonymous-default-export": 0,
    "typescript-sort-keys/interface": 0 /*["error", "asc", { caseSensitive: true, natural: true, requiredFirst: true }],*/,
    "typescript-sort-keys/string-enum": 0 /*["error", "asc", { caseSensitive: true }]*/,
    "@typescript-eslint/no-explicit-any": 0 /*["error", "asc", { caseSensitive: true }]*/,
  },
};
