module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    "array-callback-return": [0, { allowImplicit: true }],
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "camelcase": [0, {"properties": "never"}],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "max-len": [2, {"code": 120, "tabWidth": 4, "ignoreUrls": true}],
    "no-unused-vars": 1,
  },
};
