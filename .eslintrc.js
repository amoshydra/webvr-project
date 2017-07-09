module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  },
  'rules': {
    'indent': [
      'error', 2,
      { 'SwitchCase': 1 }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 'warn',
    'linebreak-style': 'off',
    'max-len': [
      'warn', 120, 2,
      { 'ignoreComments': true }
    ],
    'quote-props': [
      'warn',
      'consistent-as-needed'
    ],
    'no-cond-assign': [
      'off',
      'except-parens'
    ],
    'radix': 'off',
    'space-infix-ops': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none',
        'argsIgnorePattern': 'next'
      }
    ],
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'vue': 'never'
      }
    ],
    'default-case': 'error',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'eqeqeq': ['error', 'smart'],
    'comma-dangle': 'off',
    'func-names': 'warn',
    'prefer-arrow-callback': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'arrow-body-style': 'warn',
    'space-before-function-paren': ['error', 'never'],
    'strict': ['error', 'safe'],
    'no-var': 'error',
  }
};
