import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginJest from 'eslint-plugin-jest';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      '*.log',
      '*.d.ts',
      '.env',
      '.env.local',
      '**/*.config.ts',
      '**/*.setup.ts',
    ],
    languageOptions: {
      sourceType: 'script',
      globals: { ...globals.node, ...globals.browser },
      parser: tsParser,
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint,
      'eslint-plugin-jest': pluginJest,
    },
  },
  {
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': false,
    },
  },
  eslintConfigPrettier,
];
