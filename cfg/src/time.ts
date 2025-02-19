import { readFileSync } from 'fs';
import extractFunctions from './meriyah';
import extractFunctions2 from './utils/temp/acorn';

function measureTime<T>(label: string, fn: () => T): { value: T; ms: number } {
  const start = process.hrtime();
  const result = fn();
  const [seconds, nanoseconds] = process.hrtime(start);
  console.log(`${label} took ${seconds}s ${nanoseconds / 1000000}ms`);
  const ms = seconds * 1000 + nanoseconds / 1000000;
  return { value: result, ms };
}
const code = readFileSync('./d3_7.9.0_esbuild.js', 'utf-8');
measureTime('meriyah', () => {
  console.log('Function count:', extractFunctions(code).length);
});
measureTime('acorn', () => {
  console.log('Function count:', extractFunctions2(code).length);
});
