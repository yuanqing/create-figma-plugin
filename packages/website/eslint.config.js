import globals from 'globals'

import rootEslintConfig from '../../eslint.config.js'

export default [
  ...rootEslintConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'no-inner-declarations': ['off']
    }
  }
]
