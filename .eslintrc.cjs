module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/camelcase': 'off',
    'import/no-unresolved': 'error',
    'import/no-absolute-path': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'comma-dangle': 'off',
    'import/order': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-parens': 'off',
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    semi: 'off',
    'operator-linebreak': 'off',
    'global-require': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-closing-bracket-location': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'no-restricted-exports': ['error', { restrictedNamedExports: [] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'default-param-last': 'off',
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80,
        semi: false,
        bracketSpacing: true,
        endOfLine: 'auto'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
    }
  },
  env: {
    browser: true
  }
}