const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [
      { from: 'index.html', to: 'index.html' },
      { from: 'css', to: 'css' },
      { from: 'assets', to: 'assets' }
    ] })
  ]
};
