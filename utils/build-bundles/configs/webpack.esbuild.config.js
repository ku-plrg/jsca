const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, '../dist/webpack-esbuild'),
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {},
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ minify: TerserPlugin.esbuildMinify })],
  },
};
