import { props } from '../utils/types';
function propsComparator(func1: props, func2: props): boolean {
  const sortArray = (arr: any[]) => [...(arr || [])].sort();

  const props1 = sortArray(func1.props);
  const props2 = sortArray(func2.props);
  if (props1.length !== props2.length) return false;
  return props1.every((prop, i) => prop === props2[i]);
}

export default propsComparator;