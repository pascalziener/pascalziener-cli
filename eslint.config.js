import pluginJs from '@eslint/js'
import globals from 'globals'

export default [
  { languageOptions: { sourceType: 'module', globals: globals.browser } },
  pluginJs.configs.recommended,
]
