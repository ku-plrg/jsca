import stringifyIR from '../utils/prev-works/ir_stringifier';
import { IR } from '../utils/types';

function IRComparator(func1: IR, func2: IR): boolean {
  return stringifyIR(func1) === stringifyIR(func2);
}

export default IRComparator;
