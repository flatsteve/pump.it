module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  installedESLint: true,
  rules: {
    semi: 2,
    'comma-dangle': 2,
    'eol-last': 2
  }
};