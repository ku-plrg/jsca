import fs from 'fs';
import path from 'path';
// import { stringifyCFG } from '../compare/cfg-comparator';
import { AbsFunction, Library } from './types';

function logCFG<T extends AbsFunction>(absfuncs1: T[], lib1: Library) {
  absfuncs1.forEach((fun) => {
    const logDir = path.join(__dirname, '../logs/cfg/' + lib1.name);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    const id = fun.id;
    const logFile = path.join(logDir, `cfg_log_${id}.txt`);

    try {
      if (fun.type === 'cfg') {
        // Write stringified CFG to file
        // const irString = stringifyCFG(fun.nodes);
        // fs.writeFileSync(logFile, irString, 'utf8');
      }
    } catch (error) {
      console.error('Failed to write IR log:', error);
    }
  });
}

export default logCFG;
