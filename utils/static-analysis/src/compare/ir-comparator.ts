import { IR } from '../utils/types';
import stringifyIR from '../utils/ir_stringifier';

function IRComparator(func1: IR, func2: IR): boolean {
  return stringifyIR(func1) === stringifyIR(func2);
}

export default IRComparator;
