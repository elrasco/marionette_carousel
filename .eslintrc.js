module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: ["warn", 2, { SwitchCase: 1 }],
    semi: ["error", "always"],
    "no-unused-vars": [
      "warn",
      {
        vars: "local",
        args: "after-used"
      }
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"]
      }
    ]
  }
};
