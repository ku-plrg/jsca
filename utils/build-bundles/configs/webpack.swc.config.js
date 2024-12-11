import path, { dirname } from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, '../dist/webpack-swc'),
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
    minimizer: [new TerserPlugin({ minify: TerserPlugin.swcMinify })],
  },
};
