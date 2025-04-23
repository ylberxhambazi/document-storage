import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-case-declarations': 'off',
      'no-var': 'warn',
      'comma-dangle': 'off',
      'key-spacing': ['warn', { afterColon: true, beforeColon: false }],
      'no-debugger': 'error',
      'no-useless-escape': 'off',
      'no-return-await': 'warn',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'no-empty': 'warn',
      'space-infix-ops': 'warn',
      'no-constant-condition': 'off',
      'no-duplicate-case': 'error',
      'prefer-const': 'warn',
      'operator-linebreak': ['warn', 'after'],
      'no-useless-catch': 'off',
      'keyword-spacing': 'warn',
      'func-style': ['warn', 'expression'],
      semi: ['warn', 'never'],
      'semi-spacing': 'warn',
      'arrow-spacing': ['warn', { before: true, after: true }],
      'space-before-blocks': 'warn',
      'space-before-function-paren': [
        'warn',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'no-extra-parens': 'off',
      'arrow-parens': ['warn', 'as-needed'],
      'brace-style': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      curly: ['warn', 'multi-line'],
      quotes: ['warn', 'single'],
      'quote-props': ['warn', 'as-needed'],
      indent: ['warn', 4, { SwitchCase: 1 }],
      'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
      'no-irregular-whitespace': 'warn',
      'array-bracket-spacing': ['warn', 'never'],
      'space-in-parens': ['warn', 'never'],
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'comma-style': ['warn', 'last'],
      'comma-spacing': ['warn', { before: false, after: true }],
      'eol-last': ['warn', 'never'],
      'no-trailing-spaces': ['warn', { skipBlankLines: false, ignoreComments: true }],
      'no-throw-literal': 'error',
      'no-unreachable-loop': 'warn',
      'no-unreachable': 'warn',
      'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
      'no-useless-concat': 'warn',
      'prefer-template': 'warn',
      'no-template-curly-in-string': 'warn',
      'padded-blocks': ['warn', 'never'],
      'no-duplicate-imports': 'error',
      'object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
      'no-extra-boolean-cast': 'warn',
      'no-undef': 'off',
      'no-useless-return': 'warn',
      'no-useless-rename': 'warn',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-max-props-per-line': ['warn', { maximum: { single: 3, multi: 1 } }],
      'react/jsx-first-prop-new-line': ['warn'],
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'warn',
      'react/jsx-boolean-value': 'warn',
      'react/display-name': 'off',
      'react/self-closing-comp': ['warn', { component: true, html: true }],
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'always' }],
      'react/jsx-closing-bracket-location': 'warn',
      'react/jsx-curly-spacing': 'warn',
      'react/jsx-equals-spacing': 'warn',
      'react/jsx-wrap-multilines': ['warn', { return: 'parens-new-line' }],
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
      'react/jsx-newline': ['warn', { prevent: true }],
      'react/no-unused-prop-types': 'warn',
    }
  }
]

export default eslintConfig;
