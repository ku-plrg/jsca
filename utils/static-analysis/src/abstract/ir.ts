import * as acorn from 'acorn';
import { stringifyIRNode } from '../utils/ir_stringifier';
import {
  EmptyNode,
  Function,
  IR,
  IRInst,
  IRNode,
  SeqNode,
} from '../utils/types';

type Visitor = {
  [K in acorn.AnyNode['type']]?: (
    node: Extract<acorn.AnyNode, { type: K }>
  ) => IRNode;
};

const emptyNode: EmptyNode = { type: IRInst.EMPTY };

function nodesToSeqNode(exprs: acorn.AnyNode[]): IRNode {
  let result: IRNode = exprs[0] !== undefined ? compile(exprs[0]) : emptyNode;
  for (let i = 1; i < exprs.length; i++) {
    const eachResult: SeqNode = {
      type: IRInst.SEQ,
      left: result,
      right: compile(exprs[i]),
    };
    result = eachResult;
  }
  return result;
}

function createVisitor(): Visitor {
  return {
    // Statements
    ExpressionStatement(node: acorn.ExpressionStatement): IRNode {
      return compile(node.expression);
    },
    BlockStatement(node: acorn.BlockStatement): IRNode {
      const statements = node.body;
      if (statements.length === 0) return emptyNode;

      let result: IRNode = compile(statements[0]);
      for (let i = 1; i < statements.length; i++) {
        const eachResult: SeqNode = {
          type: IRInst.SEQ,
          left: result,
          right: compile(statements[i]),
        };
        result = eachResult;
      }
      return result;
    },
    EmptyStatement(): IRNode {
      return emptyNode;
    },
    DebuggerStatement(): IRNode {
      throw UnsupportedStatementError('DebuggerStatement');
    },
    WithStatement(): IRNode {
      throw UnsupportedStatementError('WithStatement');
    },
    ReturnStatement(node: acorn.ReturnStatement): IRNode {
      const argument = node.argument;
      if (!argument) {
        return emptyNode;
      }
      return compile(argument);
    },
    LabeledStatement(): IRNode {
      throw UnsupportedStatementError('LabeledStatement');
    },
    BreakStatement(): IRNode {
      return emptyNode;
    },
    ContinueStatement(): IRNode {
      return emptyNode;
    },
    IfStatement(node: acorn.IfStatement): IRNode {
      const test = compile(node.test);
      const consequent = compile(node.consequent);
      const alternate = node.alternate ? compile(node.alternate) : emptyNode;

      if (
        (node.test.type === 'BinaryExpression' &&
          node.test.operator === '!==') ||
        (node.test.type === 'UnaryExpression' && node.test.operator === '!')
      ) {
        return {
          type: IRInst.SEQ,
          left: test,
          right: {
            type: IRInst.SEQ,
            left: {
              type: IRInst.COND,
              test: { type: IRInst.BLOCK },
              true: { type: IRInst.BLOCK },
              false: { type: IRInst.BLOCK },
            },
            right: {
              type: IRInst.SEQ,
              left: alternate,
              right: consequent,
            },
          },
        };
      }
      const strConsequent = stringifyIRNode(consequent).split('\n')[0].length;
      const strAlternate = stringifyIRNode(alternate).split('\n')[0].length;
      const [left, right] =
        strConsequent > strAlternate
          ? [consequent, alternate]
          : [alternate, consequent];
      return {
        type: IRInst.SEQ,
        left: test,
        right: {
          type: IRInst.SEQ,
          left: {
            type: IRInst.COND,
            test: { type: IRInst.BLOCK },
            true: { type: IRInst.BLOCK },
            false: { type: IRInst.BLOCK },
          },
          right: {
            type: IRInst.SEQ,
            left: consequent,
            right: alternate,
          },
        },
      };
    },
    SwitchStatement(node: acorn.SwitchStatement) {
      const discriminant = compile(node.discriminant);
      const cases = node.cases;
      if (cases.length === 0) {
        return emptyNode;
      }

      let result = compile(cases[0]);
      for (let i = 1; i < cases.length; i++) {
        const eachResult: SeqNode = {
          type: IRInst.SEQ,
          left: result,
          right: compile(cases[i]),
        };
        result = eachResult;
      }
      return {
        type: IRInst.SEQ,
        left: discriminant,
        right: result,
      };
    },
    ThrowStatement(node: acorn.ThrowStatement) {
      return compile(node.argument);
    },
    TryStatement(node: acorn.TryStatement) {
      const block = compile(node.block);
      const handler = node.handler ? compile(node.handler.body) : emptyNode;
      const finalizer = node.finalizer ? compile(node.finalizer) : emptyNode;
      return {
        type: IRInst.SEQ,
        left: block,
        right: {
          type: IRInst.SEQ,
          left: handler,
          right: finalizer,
        },
      };
    },
    WhileStatement(node: acorn.WhileStatement) {
      return {
        type: IRInst.LOOP,
        body: {
          type: IRInst.SEQ,
          left: compile(node.test),
          right: {
            type: IRInst.SEQ,
            left: {
              type: IRInst.COND,
              test: { type: IRInst.BLOCK },
              true: { type: IRInst.BLOCK },
              false: { type: IRInst.BLOCK },
            },
            right: compile(node.body),
          },
        },
      };
    },
    DoWhileStatement(node: acorn.DoWhileStatement) {
      return {
        type: IRInst.DO_WHILE,
        test: compile(node.test),
        body: compile(node.body),
      };
    },
    ForStatement(node: acorn.ForStatement) {
      let init: IRNode = emptyNode;
      if (node.init && node.init.type === 'SequenceExpression') {
        init = nodesToSeqNode(node.init.expressions);
      } else if (node.init) {
        init = compile(node.init);
      }

      const test = node.test ? compile(node.test) : emptyNode;
      const update = node.update ? compile(node.update) : emptyNode;
      const body = compile(node.body);

      return {
        type: IRInst.SEQ,
        left: init,
        right: {
          type: IRInst.LOOP,
          body: {
            type: IRInst.SEQ,
            left: test,
            right: {
              type: IRInst.SEQ,
              left: {
                type: IRInst.COND,
                test: { type: IRInst.BLOCK },
                true: { type: IRInst.BLOCK },
                false: { type: IRInst.BLOCK },
              },
              right: {
                type: IRInst.SEQ,
                left: body,
                right: update,
              },
            },
          },
        },
      };
    },
    ForInStatement(node: acorn.ForInStatement): IRNode {
      return {
        type: IRInst.SEQ,
        left: compile(node.left),
        right: {
          type: IRInst.SEQ,
          left: compile(node.right),
          right: {
            type: IRInst.LOOP,
            body: compile(node.body),
          },
        },
      };
    },
    ForOfStatement(node: acorn.ForOfStatement): IRNode {
      let seq: IRNode = emptyNode;
      let right: IRNode = emptyNode;
      if (node.right.type === 'SequenceExpression') {
        seq = nodesToSeqNode(node.right.expressions.slice(0, -1));
        right = compile(
          node.right.expressions[node.right.expressions.length - 1]
        );
      } else {
        right = compile(node.right);
      }

      return {
        type: IRInst.SEQ,
        left: compile(node.left),
        right: {
          type: IRInst.SEQ,
          left: right,
          right: {
            type: IRInst.LOOP,
            body: compile(node.body),
          },
        },
      };
    },
    FunctionDeclaration(): IRNode {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.VariableDeclaration) {
      const declarations = node.declarations.filter((decl) => decl.init);
      if (declarations.length === 0) {
        return { type: IRInst.EMPTY };
      }
      const result = declarations
        .map((decl) => compile(decl.init as acorn.Expression))
        .reduce((acc, curr) => ({
          type: IRInst.SEQ,
          left: acc,
          right: curr,
        }));

      return result;
    },
    ClassDeclaration(): IRNode {
      return { type: IRInst.EMPTY };
    },

    // Expressions
    Identifier(): IRNode {
      return { type: IRInst.EMPTY };
    },
    Literal(): IRNode {
      return { type: IRInst.EMPTY };
    },
    ThisExpression(): IRNode {
      return { type: IRInst.EMPTY };
    },
    ArrayExpression(node: acorn.ArrayExpression): IRNode {
      const elements = node.elements;
      if (elements.length === 0) {
        return { type: IRInst.EMPTY };
      }
      let result = compile(elements[0] as acorn.Expression);
      for (let i = 1; i < elements.length; i++) {
        const eachResult: SeqNode = {
          type: IRInst.SEQ,
          left: result,
          right: compile(elements[i] as acorn.Expression),
        };
        result = eachResult;
      }
      return result;
    },
    ObjectExpression(): IRNode {
      return { type: IRInst.EMPTY };
    },
    UnaryExpression(node: acorn.UnaryExpression): IRNode {
      return compile(node.argument);
    },
    UpdateExpression(node: acorn.UpdateExpression): IRNode {
      return compile(node.argument);
    },
    BinaryExpression(node: acorn.BinaryExpression): SeqNode {
      if (node.operator === 'in') {
        return {
          type: IRInst.SEQ,
          left: compile(node.left),
          right: {
            type: IRInst.SEQ,
            left: { type: IRInst.LITERAL, id: node.operator },
            right: compile(node.right),
          },
        };
      }
      return {
        type: IRInst.SEQ,
        left: compile(node.left),
        right: compile(node.right),
      };
    },
    //TODO: when prop update last seq must be prop?
    AssignmentExpression(node: acorn.AssignmentExpression): IRNode {
      const left = compile(node.left);
      const right = compile(node.right);
      function isSeqNode(node: IRNode): node is SeqNode {
        return node.type === IRInst.SEQ;
      }
      if (isSeqNode(left)) {
        if (left.right.type === IRInst.PROP) {
          return {
            type: IRInst.SEQ,
            left: left.left,
            right: {
              type: IRInst.SEQ,
              left: right,
              right: {
                type: IRInst.UPDATE_PROP,
                left: left.right,
                right: { type: IRInst.BLOCK },
              },
            },
          };
        }
      }
      return {
        type: IRInst.SEQ,
        left,
        right,
      };
    },
    LogicalExpression(node: acorn.LogicalExpression): IRNode {
      const left = compile(node.left);
      const right = compile(node.right);
      return {
        type: IRInst.SEQ,
        left: left,
        right: {
          type: IRInst.SEQ,
          left: {
            type: IRInst.COND,
            test: { type: IRInst.BLOCK },
            true: { type: IRInst.BLOCK },
            false: { type: IRInst.BLOCK },
          },
          right: {
            type: IRInst.SEQ,
            left: right,
            right: { type: IRInst.EMPTY },
          },
        },
      };
    },

    //TODO: MemberExpression can have some missing cases
    MemberExpression(node: acorn.MemberExpression) {
      const Objnode = compile(node.object);

      if (!node.computed && node.property.type === 'Identifier') {
        const prop_node: IRNode = {
          type: IRInst.PROP,
          id: node.property.name,
          object: { type: IRInst.BLOCK },
        };
        return { type: IRInst.SEQ, left: Objnode, right: prop_node };
      }

      if (node.computed && node.property.type !== 'Identifier') {
        const prop_node = compile(node.property);
        return {
          type: IRInst.SEQ,
          left: Objnode,
          right: prop_node,
        };
      }

      return Objnode;
    },
    ConditionalExpression(node: acorn.ConditionalExpression) {
      const test = compile(node.test);
      const consequent = compile(node.consequent);
      const alternate = compile(node.alternate);
      if (
        node.consequent.type === 'Literal' &&
        node.consequent.value === 'undefined'
      ) {
        return { type: IRInst.EMPTY };
      }
      if (
        (node.test.type === 'BinaryExpression' &&
          node.test.operator === '!==') ||
        (node.test.type === 'UnaryExpression' && node.test.operator === '!')
      ) {
        return {
          type: IRInst.SEQ,
          left: test,
          right: {
            type: IRInst.SEQ,
            left: {
              type: IRInst.COND,
              test: { type: IRInst.BLOCK },
              true: { type: IRInst.BLOCK },
              false: { type: IRInst.BLOCK },
            },
            right: {
              type: IRInst.SEQ,
              left: alternate,
              right: consequent,
            },
          },
        };
      }

      const strConsequent = stringifyIRNode(consequent).split('\n')[0];
      const strAlternate = stringifyIRNode(alternate);
      const [left, right] =
        strConsequent > strAlternate
          ? [consequent, alternate]
          : [alternate, consequent];

      return {
        type: IRInst.SEQ,
        left: test,
        right: {
          type: IRInst.SEQ,
          left: {
            type: IRInst.COND,
            test: { type: IRInst.BLOCK },
            true: { type: IRInst.BLOCK },
            false: { type: IRInst.BLOCK },
          },
          right: {
            type: IRInst.SEQ,
            left: consequent,
            right: alternate,
          },
        },
      };
    },
    CallExpression(node: acorn.CallExpression): IRNode {
      const callee = compile(node.callee);
      const args = node.arguments;
      if (args.length === 0) {
        return callee;
      }

      let result = compile(args[0]);
      for (let i = 1; i < args.length; i++) {
        result = {
          type: IRInst.SEQ,
          left: result,
          right: compile(args[i]),
        };
      }

      return {
        type: IRInst.SEQ,
        left: callee,
        right: result,
      };
    },
    //TODO: NewExpression
    NewExpression(node: acorn.NewExpression): IRNode {
      const callee = compile(node.callee);
      const args = node.arguments;
      if (args.length === 0) {
        return callee;
      }
      let result = callee;
      for (let i = 0; i < args.length; i++) {
        result = {
          type: IRInst.SEQ,
          left: result,
          right: compile(args[i]),
        };
      }
      return result;
    },
    SequenceExpression(node: acorn.SequenceExpression): IRNode {
      const expressions = node.expressions;
      if (expressions.length === 0) {
        return { type: IRInst.EMPTY };
      }

      let result = compile(expressions[0]);
      for (let i = 1; i < expressions.length; i++) {
        result = {
          type: IRInst.SEQ,
          left: result,
          right: compile(expressions[i]),
        };
      }
      return result;
    },
    FunctionExpression(node: acorn.FunctionExpression): IRNode {
      return {
        type: IRInst.SEQ,
        left: { type: IRInst.LITERAL, id: 'function' },
        right: compile(node.body),
      };
    },
    ArrowFunctionExpression(): IRNode {
      throw UnsupportedStatementError('ArrowFunctionExpression');
    },
    YieldExpression(): IRNode {
      throw UnsupportedStatementError('YieldExpression');
    },
    TemplateLiteral(): IRNode {
      throw UnsupportedStatementError('TemplateLiteral');
    },
    TaggedTemplateExpression(): IRNode {
      throw UnsupportedStatementError('TaggedTemplateExpression');
    },
    Super(): IRNode {
      return { type: IRInst.LITERAL, id: 'super' };
    },
    ObjectPattern(node: acorn.ObjectPattern): IRNode {
      const seq: IRNode = nodesToSeqNode(
        node.properties.map((prop) => {
          if (prop.type === 'Property') return prop.value;
          return prop.argument;
        })
      );
      return seq;
    },
    ArrayPattern(node: acorn.ArrayPattern): IRNode {
      const seq: IRNode = nodesToSeqNode(
        node.elements.filter((e) => e !== null)
      );
      return seq;
    },
    SpreadElement(node: acorn.SpreadElement): IRNode {
      return compile(node.argument);
    },
  };
}
function UnsupportedStatementError(statement: string) {
  const error = new Error(`Unsupported statement type: ${statement}`);
  error.name = 'UnsupportedStatementError';
  return error;
}

export function compile(node: acorn.AnyNode): IRNode {
  const visitor = createVisitor();
  try {
    const handler = visitor[node.type] as
      | ((_node: Extract<acorn.AnyNode, { type: typeof node.type }>) => IRNode)
      | undefined;

    if (!handler) {
      console.error(`Unsupported node type: ${node.type}`);
      return { type: IRInst.EMPTY };
    }

    return handler(node);
  } catch (e) {
    return { type: IRInst.EMPTY };
  }
}

function ir(functions: Function[]): IR[] {
  return functions.map((func) => ({
    id: func.id,
    name: func.name,
    type: 'ir',
    ir: compile(func.body),
  }));
}

export default ir;
