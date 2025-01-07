const walk = require('acorn-walk');

function collectProps(func) {
  const props = [];

  walk.simple(func, {
    MemberExpression(node) {
      if (!node.computed && node.property?.type === 'Identifier') {
        props.push(node.property.name);
      }
    },
  });

  return props;
}

function props(functions, options) {
  return Object.entries(functions).reduce((acc, [name, func]) => {
    acc[name] = {
      params: func.params,
      proptree: collectProps(func.body, options),
    };
    return acc;
  }, {});
}

module.exports = props;
