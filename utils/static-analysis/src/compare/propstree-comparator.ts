import {
  Propstree,
  PropstreeNode,
  PropstreeNodeConditional,
  PropstreeNodeLogical,
  PropstreeNodeif,
} from '../utils/types';

type Option = {
  node_type: boolean;
  order: boolean;
  compare_other_props: boolean;
};
type PropstreeNodebranch =
  | PropstreeNodeif
  | PropstreeNodeConditional
  | PropstreeNodeLogical;

const options: Option = {
  node_type: true,
  order: true,
  compare_other_props: false,
};

const hasSameMembers = (arr1: string[], arr2: string[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return set1.size === set2.size && [...set1].every((value) => set2.has(value));
};

const isEqualObject = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every((key) => obj1[key] === obj2[key]);
};

function propstreeComparator(func1: Propstree, func2: Propstree): boolean {
  const sortArray = (arr: string[]) => arr.sort();
  const compareOtherProps = (t1: PropstreeNode, t2: PropstreeNode) => {
    const { literals: l1 = [], ...op1 } = t1.otherProps ?? {};
    const { literals: l2 = [], ...op2 } = t2.otherProps ?? {};
    return hasSameMembers(l1, l2) && isEqualObject(op1, op2);
  };

  const compareProps = (t1: PropstreeNode, t2: PropstreeNode) => {
    const props1 = sortArray(t1.props);
    const props2 = sortArray(t2.props);
    if (props1.length !== props2.length) return false;
    return props1.every((prop, i) => prop === props2[i]);

    return true;
  };

  const getChild = (node: PropstreeNodebranch) => {
    switch (node.type) {
      case 'if':
      case 'conditional':
        return {
          left: node.paths.true,
          right: node.paths.false,
        };
      case 'logical':
        return {
          left: node.paths.left,
          right: node.paths.right,
        };
    }
  };

  const comparePathNodes = (
    t1: PropstreeNodebranch,
    t2: PropstreeNodebranch
  ) => {
    if (!options.node_type && t1.type !== t2.type) return false;

    // if (t1.type === 'logical' && t1.operator !== t2.operator) return false;

    const { left: left1, right: right1 } = getChild(t1);
    const { left: left2, right: right2 } = getChild(t2);

    return options.order
      ? (compareTree(left1, left2) && compareTree(right1, right2)) ||
          (compareTree(left1, right2) && compareTree(right1, left2))
      : compareTree(left1, left2) && compareTree(right1, right2);
  };

  const compareTree = (t1: PropstreeNode, t2: PropstreeNode) => {
    if (!t1 || !t2) return t1 === t2;

    if (!compareProps(t1, t2)) return false;
    //TODO: check normal case with other cases
    if (t1.type !== 'normal' && t2.type !== 'normal') {
      if (!comparePathNodes(t1, t2)) return false;
    }

    if (options.compare_other_props && !compareOtherProps(t1, t2)) return false;

    const children1 = t1.children || [];
    const children2 = t2.children || [];

    if (children1.length !== children2.length) return false;

    for (let i = 0; i < children1.length; i++) {
      if (!compareTree(children1[i], children2[i])) return false;
    }

    return true;
  };

  return compareTree(func1.tree, func2.tree);
}

export default propstreeComparator;
