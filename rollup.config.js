const path = require('path');
const babel = require('rollup-plugin-babel');

module.exports = {
  entry: './inject-constants.js',
  dest: './build/inject-constants.js',
  format: 'cjs',
  plugins: [
    babel()
  ]
};
