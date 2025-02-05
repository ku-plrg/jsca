import { join } from 'path';
import abstraction from '../abstract';
import comparator from '../compare';
import { ComparePair, RawFunction, ScorerParams } from '../utils/types';

export const STATIC_CODES: [RawFunction, RawFunction][] = [
  ['jquery_3.7.1.js', 'jquery_3.7.1_babel-minify.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_esbuild.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_swc.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_terser.js'],
].map(([s1, s2]) => [
  { name: s1, type: 'js', path: join(__dirname, '../target/initial', s1) },
  { name: s2, type: 'js', path: join(__dirname, '../target/initial', s2) },
]);

export const DYNAMIC_CODES: [RawFunction, RawFunction][] = [
  ['jquery-3.0.0.js.json', 'jquery-3.1.0.js.json'],
  ['jquery-3.1.0.js.json', 'jquery-3.2.0.js.json'],
  ['jquery-3.2.0.js.json', 'jquery-3.2.1.js.json'],
  ['jquery-3.2.1.js.json', 'jquery-3.3.0.js.json'],
  ['jquery-3.3.0.js.json', 'jquery-3.3.1.js.json'],
  ['jquery-3.3.1.js.json', 'jquery-3.4.0.js.json'],
  ['jquery-3.4.0.js.json', 'jquery-3.4.1.js.json'],
  ['jquery-3.4.1.js.json', 'jquery-3.5.0.js.json'],
  ['jquery-3.5.0.js.json', 'jquery-3.5.1.js.json'],
  ['jquery-3.5.1.js.json', 'jquery-3.6.0.js.json'],
  ['jquery-3.6.0.js.json', 'jquery-3.6.1.js.json'],
  ['jquery-3.6.1.js.json', 'jquery-3.6.2.js.json'],
  ['jquery-3.6.2.js.json', 'jquery-3.6.3.js.json'],
  ['jquery-3.6.3.js.json', 'jquery-3.6.4.js.json'],
  ['jquery-3.6.4.js.json', 'jquery-3.7.0.js.json'],
  ['jquery-3.7.0.js.json', 'jquery-3.7.1.js.json'],
].map(([s1, s2]) => [
  { name: s1, type: 'json', path: join(__dirname, '../target/initial', s1) },
  { name: s2, type: 'json', path: join(__dirname, '../target/initial', s2) },
]);

export const STATIC_PAIR: ComparePair = {
  codes: STATIC_CODES,
  compareType: 'intra',
};

export const DYNAMIC_PAIR: ComparePair = {
  codes: DYNAMIC_CODES,
  compareType: 'inter',
};

export const scorerParams: ScorerParams = {
  CFG: { abstraction: abstraction.cfg, comparator: comparator.cfg },
  IR: { abstraction: abstraction.ir, comparator: comparator.ir },
  Props: { abstraction: abstraction.props, comparator: comparator.props },
  PropsTree: {
    abstraction: abstraction.propstree,
    comparator: comparator.propstree,
  },
};
