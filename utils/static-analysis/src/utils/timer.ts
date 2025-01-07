function measureTime<T>(label: string, fn: () => T): T {
  const start = process.hrtime();
  const result = fn();
  const diff = process.hrtime(start);
  console.log(`${label} took ${diff[0]}s ${diff[1] / 1000000}ms`);
  return result;
}

export default measureTime;
