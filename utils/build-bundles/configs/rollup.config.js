import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { minify } from 'rollup-plugin-esbuild';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/rollup/out.js',
    format: 'es', // amd cjs es iife umd system
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    minify(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
