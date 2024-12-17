import { default as jsca } from './jsca.js';
import { default as ldc } from './ldc.js';
import { default as ptdetector } from './PTdetector.js';

const detectScripts = [
  { name: 'ptdetector', func: ptdetector },
  { name: 'jsca', func: jsca },
  { name: 'ldc', func: ldc },
];

export default detectScripts;
