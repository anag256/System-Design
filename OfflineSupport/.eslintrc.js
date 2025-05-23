module.exports = {
    root: true,
    env: { es6: true, browser: true, jest: true },
    extends: [
      'airbnb',
      'prettier',
      'plugin:jest/all',
      'plugin:jsx-control-statements/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-control-statements', 'check-file'],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 8,
      ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
      sourceType: 'module',
    },
    settings: {
      react: { version: '17' },
      jest: { version: 27 },

        'import/resolver':{
          'babel-module':{},
        }

    },
    globals: {
      fetch: false,
    },
    rules: {
      'check-file/filename-blocklist': [
        'error',
        {
          '**/*.styles.js': '*.style.js',
          '**/*.styles.test.js': '*.style.test.js',
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'import/no-extraneous-dependencies': ['error', { packageDir: './example' }],
      'import/prefer-default-export': 'off',
      'jest/lowercase-name': 0,
      'jest/no-hooks': 'off',
      'jest/no-large-snapshots': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-inline-snapshots': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-nested-ternary': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-closing-tag-location': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-fragments': ['off'],
      'react/jsx-no-undef': [2, { allowGlobals: true }],
      'react/jsx-props-no-spreading': 'off',
      'react/sort-comp': 'off',
      'jest/prefer-to-be': 'off',
      'jest/prefer-lowercase-title': 'off',
      'jest/max-expects': 'off',
      'jest/prefer-snapshot-hint': 'off',
      'jest/prefer-hooks-in-order': 'off',
      'jest/require-hook': 'off',
      'jest/no-conditional-in-test': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-restricted-exports': 'off',
    },
  };