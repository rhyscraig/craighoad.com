// @ts-check

import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    // This is the new section that tells ESLint what to ignore.
    ignores: [
      'vendor/', // Ignore all third-party libraries
      'gulpfile.js', // Ignore the Gulp build script
      '**/*.min.js', // Ignore any minified JavaScript files
    ],
  },

  // This is your existing configuration, which will now
  // only apply to your own source code.
  js.configs.recommended,
  {
    rules: {
      // You can add or override specific rules here if you want.
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
      },
    },
  },
];
