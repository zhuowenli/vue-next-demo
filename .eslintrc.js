/*
 * Author: 卓文理
 * Email: zhuowenligg@gmail.com
 * Date: 2020-05-31 10:59:36
 */

const isProd = process.env.NODE_ENV === 'production';
const warn = isProd ? 1 : 0;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': warn,
    'no-debugger': warn,
    '@typescript-eslint/no-explicit-any': warn,
  },
};
