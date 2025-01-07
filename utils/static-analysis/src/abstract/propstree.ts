import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import {
  proptreeNode,
  proptreeNodeif,
  proptreeNodeLogical,
  proptreeNodeConditional,
  proptree,
  Function,
} from '../utils/types';

type Options = {
  if_condition: boolean;
  early_return: boolean;
  operators: string[];
  literals: boolean;
};
type State = {
  ancestors: Node[];
};
type visitor = (node: acorn.Node, state: State) => void;

const options: Options = {
  if_condition: true,
  early_return: true,
  operators: ['+', '-', '*', '/', '%', '==', '>', '>=', '<', '<='],
  literals: true,
};

function makePropstree(func: acorn.Node): proptreeNode {
  const rootTree: proptreeNode = {
    type: 'normal',
    props: [],
    children: [],
    otherProps: {},
  };

  let currentContext: proptreeNode = rootTree;
  const contextStack: proptreeNode[] = [];

  const withContext = (newContext: proptreeNode, callback: () => void) => {
    if (!newContext.children) newContext.children = [];
    if (!newContext.props) newContext.props = [];
    if (!newContext.otherProps) newContext.otherProps = {};
    contextStack.push(currentContext);
    currentContext = newContext;
    callback();
    const poppedContext = contextStack.pop();
    if (poppedContext === undefined) {
      throw new Error('contextStack.pop() is undefined');
    } else {
      currentContext = poppedContext;
    }
  };

  function containsReturn(node: acorn.Node): boolean {
    if (!node) return false;
    if (node.type === 'ReturnStatement') return true;
    if (node.type === 'BlockStatement') {
      return node.body.some(containsReturn);
    }
    return false;
  }

  const visitors = {
    IfStatement(node: acorn.IfStatement, state: State, c: visitor) {
      const ifNode: proptreeNodeif = {
        type: 'if',
        props: [],
        children: [],
        paths: {
          true: { type: 'normal', props: [], children: [], otherProps: {} },
          false: { type: 'normal', props: [], children: [], otherProps: {} },
        },
      };

      currentContext.children.push(ifNode);

      const hasRet = containsReturn(node.consequent);

      options.if_condition
        ? withContext(ifNode.paths.false, () => c(node.test, state))
        : withContext(ifNode, () => c(node.test, state));

      // Handle true branch
      withContext(ifNode.paths.true, () => c(node.consequent, state));

      // Handle false branch if it exists
      if (node.alternate) {
        withContext(ifNode.paths.false, () => c(node.alternate, state));
      } else if (options.early_return && hasRet) {
        const ancestors = state.ancestors;
        const parentNode = ancestors[ancestors.length - 2];
        if (parentNode && parentNode.type === 'BlockStatement') {
          const idx = parentNode.body.indexOf(node);
          if (idx !== -1) {
            const subsequent = parentNode.body.slice(idx + 1);
            parentNode.body.splice(idx + 1);
            withContext(ifNode.paths.false, () => {
              subsequent.forEach((stmt) => c(stmt, state));
            });
          }
        }
      }
    },

    ConditionalExpression(
      node: acorn.ConditionalExpression,
      state: State,
      c: visitor
    ) {
      const condNode: proptreeNodeConditional = {
        type: 'conditional',
        props: [],
        children: [],
        paths: {
          true: { type: 'normal', props: [], children: [], otherProps: {} },
          false: { type: 'normal', props: [], children: [], otherProps: {} },
        },
      };

      currentContext.children.push(condNode);

      // Handle condition
      withContext(condNode, () => c(node.test, state));

      // Handle true branch
      withContext(condNode.paths.true, () => c(node.consequent, state));

      // Handle false branch
      withContext(condNode.paths.false, () => c(node.alternate, state));
    },

    LogicalExpression(node: acorn.LogicalExpression, state: State, c: visitor) {
      const logicNode: proptreeNodeLogical = {
        type: 'logical',
        operator: node.operator,
        children: [],
        props: [],
        paths: {
          left: { type: 'normal', props: [], children: [], otherProps: {} },
          right: { type: 'normal', props: [], children: [], otherProps: {} },
        },
      };

      currentContext.children.push(logicNode);

      // Handle left branch
      withContext(logicNode.paths.left, () => c(node.left, state));

      // Handle right branch
      withContext(logicNode.paths.right, () => c(node.right, state));
    },

    MemberExpression(node: acorn.MemberExpression, state: State, c: visitor) {
      if (!node.computed && node.property?.type === 'Identifier') {
        currentContext.props.push(node.property.name);
      }

      walk.base.MemberExpression(node, state, c);
    },

    BinaryExpression(node, state, c) {
      if (options.operators) {
        const operator = node.operator;
        if (options.operators.includes(operator))
          incValue(currentContext.otherProps, operator);
      }

      walk.base.BinaryExpression(node, state, c);
    },

    Literal(node, state, c) {
      if (options.literals) {
        const literal = node.raw;
        if (currentContext.otherProps.literals)
          currentContext.otherProps.literals.push(literal);
        else currentContext.otherProps.literals = [literal];
      }

      walk.base.Literal(node, state, c);
    },
  };

  function myWalker(node: acorn.Node, state: State, visitors: any) {
    state.ancestors.push(node);
    const visitor = visitors[node.type];
    if (visitor) {
      visitor(node, state, (child) => myWalker(child, state, visitors));
    } else {
      walk.base[node.type](node, state, (child) =>
        myWalker(child, state, visitors)
      );
    }
    state.ancestors.pop();
  }
  const state: State = { ancestors: [] };
  myWalker(func, state, visitors);

  return rootTree;
}

function propstree(functions: Function[]): proptree[] {
  return functions.map((func) => ({
    name: func.name,
    type: 'proptree',
    tree: makePropstree(func.body),
  }));
}

function incValue(obj: Record<string, number>, key: string): void {
  if (obj[key]) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }
}

export default propstree;
