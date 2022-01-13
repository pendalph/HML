module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        curly: 0,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-bitwise': 0,
        'react-hooks/exhaustive-deps': 0,
          "comma-dangle": ["error", {
            "arrays": "error",
            "objects": "error",
            "imports": "never",
            "exports": "never",
            "functions": "error"
        }]
      },
    },
  ],
};
