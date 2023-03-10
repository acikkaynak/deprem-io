module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  printWidth: 80,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/libs/(.*)$',
    '^@/lib/(.*)$',
    '^@/middlewares/(.*)$',
    '^@/i18n/(.*)$',
    '^@/stores/(.*)$',
    '^@/hooks/(.*)$',
    '^@/modules/(.*)$',
    '^@/components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
