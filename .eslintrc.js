module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "allowForLoopAfterthoughts": 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/destructuring-assignment": [0, "always", {"ignoreClassFields": 0 }],
    "react/prop-types": [
      0,
      { "ignore": "ignore", "customValidators": "customValidator" }
    ]
  },
};
