import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

interface Node {
  type: string;
  props?: string[];
  otherProps?: Record<string, any>;
  [key: string]: any;
}

function formatProps(props?: string[]): string {
  if (!props || props.length === 0) return '[]';
  return `[${props.join(', ')}]`;
}

function formatOtherProps(otherProps?: Record<string, any>): string {
  if (!otherProps || Object.keys(otherProps).length === 0) return '{}';
  const operators = Object.keys(otherProps)
    .filter((key) => key !== 'literals')
    .map((key) => `${key}: ${otherProps[key]}`)
    .join(', ');
  const literals = otherProps.literals?.join(', ').replace(/"/g, '') || '';
  return `{${operators}}\\n[${literals}]`;
}

function generateDotContent(
  tree: Node,
  functionName: string,
  fileName: string
): string {
  let nodeId = 0;
  const getNextId = () => `node${nodeId++}`;

  let dot = 'digraph G {\n';
  dot += `  label="Function: ${functionName}";\n`;
  dot += '  node [shape=box, style=rounded];\n';

  function processBranch(node: Node, parentId: string | null = null): void {
    const currentId = getNextId();
    const nodeProps = formatProps(node.props);
    const nodeOtherProps = formatOtherProps(node.otherProps);

    // Node styling based on type
    let nodeStyle = '';
    if (node.type === 'if') nodeStyle = ', color=blue';
    else if (node.type === 'logical') nodeStyle = ', color=red';
    else if (node.type === 'conditional') nodeStyle = ', color=green';

    dot += `  ${currentId} [label="${node.type}\\n${nodeProps}\\n${nodeOtherProps}"${nodeStyle}];\n`;

    if (parentId) {
      dot += `  ${parentId} -> ${currentId};\n`;
    }

    if (node.children) {
      node.children.forEach((child: Node) => processBranch(child, currentId));
    }
  }

  processBranch(tree);
  dot += '}';

  return dot;
}

function createDotGraph(
  tree: Node,
  functionName: string,
  fileName: string
): void {
  const dotContent = generateDotContent(tree, functionName, fileName);
  const outputDir = join(__dirname, '../logs/graphs', fileName);
  mkdirSync(outputDir, { recursive: true });
  const dotFilePath = join(outputDir, `${functionName}.dot`);
  writeFileSync(dotFilePath, dotContent, 'utf-8');

  exec(
    `dot -Tpng ${dotFilePath} -o ${join(outputDir, `${functionName}.png`)}`,
    (error) => {
      if (error) {
        console.error(`Error generating graph for ${functionName}:`, error);
      }
    }
  );
}

export default createDotGraph;
