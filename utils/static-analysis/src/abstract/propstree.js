const walk = require('acorn-walk');

const options = {
  if_condition: true,
  early_return: true,
  operators: ['+', '-', '*', '/', '%', '==', '>', '>=', '<', '<='],
  literals: true,
};
function makePropstree(func) {
  const rootTree = { props: [], children: [], otherProps: {} };

  let currentContext = rootTree;
  const contextStack = [];

  const withContext = (newContext, callback) => {
    if (!newContext.children) newContext.children = [];
    if (!newContext.props) newContext.props = [];
    if (!newContext.otherProps) newContext.otherProps = {};
    contextStack.push(currentContext);
    currentContext = newContext;
    callback();
    currentContext = contextStack.pop();
  };

  function containsReturn(node) {
    if (!node) return false;
    if (node.type === 'ReturnStatement') return true;
    if (node.type === 'BlockStatement') {
      return node.body.some(containsReturn);
    }
    return false;
  }

  const visitors = {
    IfStatement(node, state, c) {
      const ifNode = {
        type: 'if',
        props: [],
        paths: {
          true: { props: [], children: [], otherProps: {} },
          false: { props: [], children: [], otherProps: {} },
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

    ConditionalExpression(node, state, c) {
      const condNode = {
        type: 'conditional',
        props: [],
        paths: {
          true: { props: [], children: [], otherProps: {} },
          false: { props: [], children: [], otherProps: {} },
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

    LogicalExpression(node, state, c) {
      const logicNode = {
        type: 'logical',
        operator: node.operator,
        props: [],
        paths: {
          left: { props: [], children: [], otherProps: {} },
          right: { props: [], children: [], otherProps: {} },
        },
      };

      currentContext.children.push(logicNode);

      // Handle left branch
      withContext(logicNode.paths.left, () => c(node.left, state));

      // Handle right branch
      withContext(logicNode.paths.right, () => c(node.right, state));
    },

    MemberExpression(node, state, c) {
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

  function myWalker(node, state, visitors) {
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
  const state = { ancestors: [] };
  myWalker(func, state, visitors);

  return rootTree;
}

function propstree(functions, options) {
  return Object.entries(functions).reduce((acc, [name, func]) => {
    acc[name] = {
      params: func.params,
      proptree: makePropstree(func.body, options),
    };
    return acc;
  }, {});
}

function incValue(obj, key) {
  if (obj[key]) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }
}

module.exports = propstree;