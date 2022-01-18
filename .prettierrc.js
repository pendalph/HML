module.exports = {
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  // importOrder: ['_', '^[./]'],
  importOrder: ['_', '^_app/(.*)$', '^@react-navigation/(.*)$', '^@reduxjs/(.*)$', '^[./]', '^[../]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
