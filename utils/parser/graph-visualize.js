const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function formatProps(props) {
  if (!props || props.length === 0) return '[]';
  return `[${props.join(', ')}]`;
}
function generateDotContent(tree, functionName, fileName) {
  let nodeId = 0;
  const getNextId = () => `node${nodeId++}`;

  let dot = 'digraph G {\n';
  dot += `  label="Function: ${functionName}";\n`;
  dot += '  node [shape=box, style=rounded];\n';

  function processBranch(node, parentId = null) {
    const currentId = getNextId();
    const nodeProps = formatProps(node.props);

    // Node styling based on type
    let nodeStyle = '';
    if (node.type === 'if') nodeStyle = ', color=blue';
    else if (node.type === 'logical') nodeStyle = ', color=red';
    else if (node.type === 'conditional') nodeStyle = ', color=green';

    // Node label with props
    const label = `${node.type || 'node'}\\n${nodeProps}`;
    dot += `  ${currentId} [label="${label}"${nodeStyle}];\n`;

    // Connect to parent
    if (parentId) {
      dot += `  ${parentId} -> ${currentId};\n`;
    }

    // Process paths
    if (node.paths) {
      for (const [pathType, pathNode] of Object.entries(node.paths)) {
        const pathId = getNextId();
        dot += `  ${pathId} [label="${pathType}", shape=diamond];\n`;
        dot += `  ${currentId} -> ${pathId};\n`;
        processBranch(pathNode, pathId);
      }
    }

    // Process children
    if (node.children) {
      node.children.forEach((child) => processBranch(child, currentId));
    }
  }

  processBranch(tree);
  dot += '}';

  const outputDir = path.join(__dirname, 'logs', 'function-trees', fileName);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save with function name and timestamp
  const safeFunctionName = functionName.replace(/[^a-zA-Z0-9]/g, '_');
  const dotPath = path.join(outputDir, `tree_${safeFunctionName}.dot`);
  const pngPath = path.join(outputDir, `tree_${safeFunctionName}.png`);

  fs.writeFileSync(dotPath, dot);

  exec(`dot -Tpng ${dotPath} -o ${pngPath}`, (error) => {
    if (error) {
      console.error(`Error generating graph for ${functionName}:`, error);
    }
  });
}

function createDotGraph(functions, fileName) {
  try {
    return Object.entries(functions).map(([name, func]) => {
      const tree = func.proptree;
      generateDotContent(tree, name, fileName);
    });
  } catch (error) {
    console.error('Error creating dot graph:', error);
  }
}

module.exports = createDotGraph;
