import { Props } from '../utils/types';

interface Option {
  unique_only: boolean;
}

const option: Option = { unique_only: true };

function propsComparator(func1: Props, func2: Props): boolean {
  const sortArray = (arr: any[]) => [...(arr || [])].sort();

  const props1 = sortArray(
    option.unique_only ? [...new Set(func1.props)] : func1.props
  );
  const props2 = sortArray(
    option.unique_only ? [...new Set(func2.props)] : func2.props
  );
  if (props1.length !== props2.length) return false;
  return props1.every((prop, i) => prop === props2[i]);
}

export default propsComparator;
