module.exports = {
  extends: "airbnb-base",
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  rules: {
    "no-unused-vars": 1,
    "comma-dangle": 0,
    "eol-last": 0,
    "no-console": 0
  }
};
