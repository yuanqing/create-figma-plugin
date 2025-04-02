/* eslint-disable sort-keys */

import js from '@eslint/js'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  js.configs.recommended,
  tsEslint.configs.recommended,
  pluginPrettierRecommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'simple-import-sort': pluginSimpleImportSort
    },
    settings: {
      react: {
        pragma: 'h',
        version: '16.0'
      }
    },
    rules: {
      'no-console': ['error'],
      'no-unused-vars': ['off'],
      'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/member-delimiter-style': ['off'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-use-before-define': ['off'],
      '@typescript-eslint/no-var-requires': ['off'],
      'prettier/prettier': [
        'error',
        { semi: false, singleQuote: true, trailingComma: 'none' }
      ],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          reservedFirst: true
        }
      ],
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['class', 'clip-rule', 'fill-rule', 'spellcheck']
        }
      ],
      'react-hooks/rules-of-hooks': ['error'],
      'react-hooks/exhaustive-deps': ['error'],
      'simple-import-sort/imports': ['error'],
      'simple-import-sort/exports': ['error']
    }
  }
)
