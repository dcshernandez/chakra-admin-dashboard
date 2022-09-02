module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'react-app'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': ['off', ''],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'import/no-cycle': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-deprecated': 'off',
    'react/button-has-type': 'off',
    'lodash/import-scope': 'error',
    'react/prop-types': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    semi: [2, 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/named': 2,
    'linebreak-style': ['off'],
    'function-paren-newline': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: ['label'],
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-exports': 0,
  },
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      plugins: ['jest', 'testing-library', 'jest-dom'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-unresolved': [
          2,
          {
            ignore: ['test-utils'],
          },
        ],
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: './tools/webpack/webpack.config.common',
      },
    },
  },
  plugins: ['react', 'lodash'],
}
