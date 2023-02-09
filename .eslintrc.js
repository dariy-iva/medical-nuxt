const INDENT = 2;
const MAX_DEPTH = 4;
const PARAMS_NUMBER = 3;
const MAGIC_NUMBERS_IGNORE = [ 1, -1, 419, 500, 200, 0 ];

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
    serviceworker: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    '@nuxtjs/eslint-config-typescript'
  ],

  globals: {
    // add here global variables to avoid eslint warnings (3-rd party libraries, global stores etc.)
    App: 'writable',
    _: 'readonly',
    axios: 'readonly',
    enquire: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': [ 'error', { properties: 'never' } ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'generator-star-spacing': 'error',
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'indent': [ 'error', INDENT ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'key-spacing': [ 'error', { afterColon: true, mode: 'strict' } ],
    'keyword-spacing': [ 'error', { before: true, after: true } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-depth': [ 'error', MAX_DEPTH ],
    'max-lines': [
      'warn',
      { max: 500, skipBlankLines: true, skipComments: true }
    ],
    'max-params': [ 'error', PARAMS_NUMBER ],
    'new-cap': [ 'error', { newIsCap: true } ],
    'no-duplicate-imports': 'error',
    'no-magic-numbers': [ 'warn', { ignore: MAGIC_NUMBERS_IGNORE } ],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': [
      'error',
      { skipBlankLines: true, ignoreComments: true }
    ],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': [ 'error', 'nofunc' ],
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [ 'error', 'beside' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'one-var': [ 'error', 'never' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'quote-props': [ 'error', 'consistent' ],
    'quotes': [ 'error', 'single' ],
    'rest-spread-spacing': [ 'error', 'never' ],
    'semi-style': [ 'error', 'last' ],
    'semi': [ 'error', 'always', { omitLastInOneLineBlock: true } ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],
    'spaced-comment': [ 'error', 'always' ],
    'vue/html-indent': [
      'error',
      INDENT,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          [ 'UNIQUE', 'SLOT' ],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ]
  }
};
