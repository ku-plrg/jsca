import fs from 'fs';
import path from 'path';
import { AbsFunction, Library } from '../types';
import stringifyIR from './ir_stringifier';

function LogIR<T extends AbsFunction>(absfuncs1: T[], lib1: Library) {
  absfuncs1.forEach((fun) => {
    // Create logs directory if it doesn't exist
    const logDir = path.join(__dirname, '../logs/ir/' + lib1.name);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const id = fun.id;
    const logFile = path.join(logDir, `ir_log_${id}.txt`);

    try {
      if (fun.type === 'ir') {
        // Write stringified IR to file
        const irString = stringifyIR(fun);
        fs.writeFileSync(logFile, irString, 'utf8');
      }
    } catch (error) {
      console.error('Failed to write IR log:', error);
    }
  });
}

export default LogIR;
