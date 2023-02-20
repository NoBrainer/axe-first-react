module.exports = {
  // General configuration
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          ['builtin', 'external'],
          ['index', 'internal', 'parent', 'sibling'],
        ],
        'newlines-between': 'never',
      },
    ],
  },
  ignorePatterns: ['build/**/*'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },

  overrides: [
    // Front-end configuration
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      env: {
        browser: true,
        es2021: true,
      },
      extends: ['plugin:react/recommended', 'google', 'plugin:jsx-a11y/recommended', 'prettier'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['jsx-a11y', 'react'],
      rules: {
        'no-unused-vars': 'warn',
        'require-jsdoc': 'off',
      },
      settings: {
        'import/resolver': {
          node: {
            moduleDirectory: ['node_modules'],
            paths: ['src'],
            extensions: ['.js', '.jsx'],
          },
        },
        react: {
          version: 'detect',
        },
      },
    },

    // Back-end configuration
    // This example shows how you can have separate rules for back-end code.
    // {
    //   files: ['server/**/*'],
    //   env: {
    //     commonjs: true,
    //     es2021: true,
    //     node: true,
    //   },
    //   extends: ['google', 'prettier'],
    //   parserOptions: {
    //     ecmaVersion: 'latest',
    //   },
    //   rules: {
    //     'max-len': ['warn', 120],
    //     'no-unused-vars': 'warn',
    //     'require-jsdoc': 'off',
    //   },
    //   settings: {
    //     'import/resolver': {
    //       node: {
    //         moduleDirectory: ['server/node_modules'],
    //         paths: ['server'],
    //         extensions: ['.js'],
    //       },
    //     },
    //   },
    // },
  ],
};
