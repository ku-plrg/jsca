const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function createDotGraph(tree, outputPath, functionName) {
  let nodeId = 0;
  const getNextId = () => `node${nodeId++}`;

  let dot = 'digraph G {\n';
  dot += `  label="Function: ${functionName}";\n`;
  dot += '  node [shape=box, style=rounded];\n';

  function formatProps(props) {
    if (!props || props.length === 0) return '[]';
    return `[${props.join(', ')}]`;
  }

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
      for (const child of node.children) {
        processBranch(child, currentId);
      }
    }
  }

  processBranch(tree);
  dot += '}';

  // Create output directory if it doesn't exist
  const outputDir = path.join(outputPath, 'function-trees');
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
    } else {
      console.log(`Graph for ${functionName} saved to ${pngPath}`);
    }
  });
}

module.exports = createDotGraph;
