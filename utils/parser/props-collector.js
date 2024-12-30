const walk = require('acorn-walk');

function makePropstree(func) {
  // Track the current path we're analyzing
  const pathStack = [];

  // Root tree structure
  const rootTree = {
    props: [],
    children: [],
  };

  // Current context for property collection
  let currentContext = rootTree;

  // Helper function to handle path changes
  const withContext = (newContext, callback) => {
    if (!newContext.children) newContext.children = [];
    if (!newContext.props) newContext.props = [];
    pathStack.push(currentContext);
    currentContext = newContext;
    callback();
    currentContext = pathStack.pop();
  };

  const visitors = {
    IfStatement(node, state, c) {
      const ifNode = {
        type: 'if',
        props: [],
        paths: {
          true: { props: [], children: [] },
          false: { props: [], children: [] },
        },
      };

      currentContext.children.push(ifNode);

      // Handle condition
      withContext(ifNode, () => c(node.test, state));

      // Handle true branch
      withContext(ifNode.paths.true, () => c(node.consequent, state));

      // Handle false branch if it exists
      if (node.alternate) {
        withContext(ifNode.paths.false, () => c(node.alternate, state));
      }
    },

    ConditionalExpression(node, state, c) {
      const condNode = {
        type: 'conditional',
        props: [],
        paths: {
          true: { props: [], children: [] },
          false: { props: [], children: [] },
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
          left: { props: [], children: [] },
          right: { props: [], children: [] },
        },
      };

      currentContext.children.push(logicNode);

      // Handle left branch
      withContext(logicNode.paths.left, () => c(node.left, state));

      // Handle right branch
      withContext(logicNode.paths.right, () => c(node.right, state));
    },

    MemberExpression(node, state, c) {
      if (node.property && node.property.type === 'Identifier') {
        currentContext.props.push(node.property.name);
      } else if (node.property && node.property.type === 'Literal') {
        currentContext.props.push(node.property.value.toString());
      }
      //  TODO: some missing cases
      //  else {
      //   console.log('Unknown member expression:', node);
      //   currentContext.props.push('unknown');
      // }
      walk.base[node.type](node, state, c);
    },
  };

  // Start the recursive walk
  walk.recursive(func, {}, visitors);

  //   Clean up the tree by removing empty children and props for better visualization
  //   const cleanupTree = (node) => {
  //     if (node.children && node.children.length === 0) {
  //       delete node.children;
  //     }
  //     if (node.props && node.props.length === 0) {
  //       delete node.props;
  //     }
  //     if (node.paths) {
  //       for (const path of Object.values(node.paths)) {
  //         cleanupTree(path);
  //       }
  //     }
  //     if (node.children) {
  //       node.children.forEach(cleanupTree);
  //     }
  //   };

  //   cleanupTree(rootTree);s

  return rootTree;
}

function collectProps(functions) {
  return Object.entries(functions).reduce((acc, [name, func]) => {
    acc[name] = {
      params: func.params,
      proptree: makePropstree(func.body),
    };
    return acc;
  }, {});
}

module.exports = collectProps;
