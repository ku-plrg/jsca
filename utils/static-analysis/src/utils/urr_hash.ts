import { Node } from 'acorn';
import { createHash } from 'crypto';
import { Function } from '../utils/types';

function hashNode(node: Node): string {
  // Handle null or undefined nodes
  if (!node) {
    return '';
  }

  let childrenHash = '';

  // Process all properties of the node that could contain child nodes
  for (const key in node) {
    const value = (node as any)[key];

    // Skip internal properties and non-node properties
    if (
      key === 'start' ||
      key === 'end' ||
      key === 'loc' ||
      key === 'sourceFile' ||
      key === 'range' ||
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null
    ) {
      continue;
    }

    // Handle arrays of nodes
    if (Array.isArray(value)) {
      childrenHash += value
        .map((child) => (isASTNode(child) ? hashNode(child) : ''))
        .join('');
    }
    // Handle single node
    else if (isASTNode(value)) {
      childrenHash += hashNode(value);
    }
  }

  // Create hash input by combining node type and children hashes
  const hashInput = `${node.type}${childrenHash}`;

  // Generate SHA-256 hash
  const hash = createHash('sha256').update(hashInput).digest('hex');

  return hash;
}

// Type guard to check if a value is an AST node
function isASTNode(value: any): value is Node {
  return value && typeof value === 'object' && 'type' in value;
}

function generateASTHash(f1: Function): string {
  const body = f1.body as Node;
  const hash = hashNode(body);
  return hash;
}

function convertASTHash(c1: Function[]): string[] {
  const hashes = c1.map(generateASTHash);
  return hashes;
}

export { convertASTHash };

// 일반적인 함수 선언문 AST
const normalNode = {
  type: 'FunctionDeclaration',
  id: {
    type: 'Identifier',
    name: 'add',
  },
  params: [
    {
      type: 'Identifier',
      name: 'a',
    },
    {
      type: 'Identifier',
      name: 'b',
    },
  ],
  body: {
    type: 'BlockStatement',
    body: [
      {
        type: 'ReturnStatement',
        argument: {
          type: 'BinaryExpression',
          operator: '+',
          left: {
            type: 'Identifier',
            name: 'a',
          },
          right: {
            type: 'Identifier',
            name: 'b',
          },
        },
      },
    ],
  },
};

// 특이 케이스: Generator 함수 with yield
const specialNode = {
  type: 'FunctionDeclaration',
  generator: true,
  id: {
    type: 'Identifier',
    name: 'fibonacci',
  },
  params: [],
  body: {
    type: 'BlockStatement',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'YieldExpression',
          argument: {
            type: 'Literal',
            value: 1,
            raw: '1',
          },
          delegate: false,
        },
      },
    ],
  },
};

console.log(hashNode(normalNode as any));
