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
    "max-len": [
      2,
      {
        code: 300,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
  },
};
