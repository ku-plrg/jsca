import { Function, IRNode, IRInst, IR } from '../utils/types';
import * as acorn from 'acorn';

type Visitor = {
  [key: string]: (node: acorn.Node) => IRNode;
};

function createVisitor(): Visitor {
  return {
    // Statements
    ExpressionStatement(node: acorn.Node): IRNode {
      return { type: IRInst.BLANK };
    },
    BlockStatement(node: acorn.Node): IRNode {
      const statements = (node as any).body;
      if (statements.length === 0) {
        return { type: IRInst.EMPTY };
      }

      let result: IRNode = compile(statements[0]);
      for (let i = 1; i < statements.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(statements[i])],
        };
      }
      return result;
    },
    EmptyStatement(): IRNode {
      return { type: IRInst.EMPTY };
    },
    DebuggerStatement(): IRNode {
      throw UnsupportedStatementError('WithStatement');
    },
    WithStatement(): IRNode {
      throw UnsupportedStatementError('WithStatement');
    },

    ReturnStatement(node: acorn.Node): IRNode {
      const argument = (node as any).argument;
      if (!argument) {
        return { type: IRInst.EMPTY };
      }
      return compile(argument);
    },
    LabeledStatement(): IRNode {
      return { type: IRInst.EMPTY };
    },
    BreakStatement(): IRNode {
      return { type: IRInst.EMPTY };
    },
    ContinueStatement(): IRNode {
      return { type: IRInst.EMPTY };
    },
    IfStatement(node: acorn.Node): IRNode {
      const test = compile((node as any).test);
      const consequent = compile((node as any).consequent);
      const alternate = (node as any).alternate
        ? compile((node as any).alternate)
        : { type: IRInst.EMPTY };
      const if_node = {
        type: IRInst.COND,
        children: [
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
        ],
      };

      return {
        type: IRInst.SEQ,
        children: [
          test,
          {
            type: IRInst.SEQ,
            children: [
              if_node,
              {
                type: IRInst.SEQ,
                children: [consequent, alternate],
              },
            ],
          },
        ],
      };
    },
    SwitchStatement(): IRNode {
      return { type: IRInst.BLANK };
    },
    ThrowStatement(): IRNode {
      return { type: IRInst.BLANK };
    },
    TryStatement(): IRNode {
      return { type: IRInst.BLANK };
    },
    WhileStatement(node: acorn.Node): IRNode {
      return {
        type: IRInst.LOOP,
        children: [compile((node as any).test), compile((node as any).body)],
      };
    },
    DoWhileStatement(node: acorn.Node): IRNode {
      return {
        type: IRInst.LOOP,
        children: [compile((node as any).test), compile((node as any).body)],
      };
    },
    ForStatement(node: acorn.Node): IRNode {
      const init = (node as any).init
        ? compile((node as any).init)
        : { type: IRInst.EMPTY };
      const test = (node as any).test
        ? compile((node as any).test)
        : { type: IRInst.EMPTY };
      const update = (node as any).update
        ? compile((node as any).update)
        : { type: IRInst.EMPTY };
      const body = compile((node as any).body);

      return {
        type: IRInst.SEQ,
        children: [
          init,
          {
            type: IRInst.LOOP,
            children: [test, { type: IRInst.SEQ, children: [body, update] }],
          },
        ],
      };
    },
    ForInStatement(node: acorn.Node): IRNode {
      return {
        type: IRInst.FORIN,
        children: [
          compile((node as any).left) as IRNode,
          compile((node as any).right) as IRNode,
        ].filter((child): child is IRNode => child !== undefined),
      };
    },
    //TODO: ForOfStatement
    ForofStatement(node: acorn.Node): IRNode {
      return {
        type: IRInst.FORIN,
        children: [
          compile((node as any).left) as IRNode,
          compile((node as any).right) as IRNode,
        ].filter((child): child is IRNode => child !== undefined),
      };
    },
    FunctionDeclaration(): IRNode {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.Node): IRNode {
      return { type: IRInst.EMPTY };
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
      return { type: IRInst.BLANK };
    },
    ArrayExpression(node: acorn.Node): IRNode {
      const elements = (node as any).elements;
      if (elements.length === 0) {
        return { type: IRInst.EMPTY };
      }

      let result = compile(elements[0]);
      for (let i = 1; i < elements.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(elements[i])],
        };
      }
      return result;
    },
    ObjectExpression(): IRNode {
      return { type: IRInst.EMPTY };
    },
    UnaryExpression(node: acorn.Node): IRNode {
      return compile((node as acorn.UnaryExpression).argument);
    },
    UpdateExpression(node: acorn.Node): IRNode {
      return compile((node as acorn.UpdateExpression).argument);
    },
    BinaryExpression(node: acorn.Node): IRNode {
      return {
        type: IRInst.SEQ,
        children: [compile((node as any).left), compile((node as any).right)],
      };
    },
    AssignmentExpression(node: acorn.Node): IRNode {
      return {
        type: IRInst.ASSIGN,
        children: [compile((node as any).left), compile((node as any).right)],
      };
    },
    LogicalExpression(node: acorn.Node): IRNode {
      const left = compile((node as any).left);
      const right = compile((node as any).right);
      const cond_node = {
        type: IRInst.COND,
        children: [
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
        ],
      };
      return {
        type: IRInst.SEQ,
        children: [left, { type: IRInst.SEQ, children: [cond_node, right] }],
      };
    },
    MemberExpression(node: acorn.Node): IRNode {
      const { computed, property, object } = node as any;

      if (!computed && property?.type === 'Identifier') {
        const objectIR = compile(object);
        return {
          type: IRInst.SEQ,
          children: [
            objectIR,
            {
              type: IRInst.PROP,
              id: property.name,
              children: [{ type: IRInst.BLANK }],
            },
          ],
        };
      } else
        return {
          type: IRInst.BLANK,
        };
    },
    ConditionalExpression(node: acorn.Node): IRNode {
      const test = compile((node as any).test);
      const consequent = compile((node as any).consequent);
      const alternate = compile((node as any).alternate);
      const cond_node = {
        type: IRInst.COND,
        children: [
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
          { type: IRInst.BLANK },
        ],
      };

      return {
        type: IRInst.SEQ,
        children: [
          test,
          {
            type: IRInst.SEQ,
            children: [
              cond_node,
              {
                type: IRInst.SEQ,
                children: [consequent, alternate],
              },
            ],
          },
        ],
      };
    },
    CallExpression(node: acorn.Node): IRNode {
      const callee = compile((node as any).callee);
      const args = (node as any).arguments;

      if (args.length === 0) {
        return callee;
      }

      let result = compile(args[0]);
      for (let i = 1; i < args.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(args[i])],
        };
      }

      return {
        type: IRInst.SEQ,
        children: [callee, result],
      };
    },
    //TODO: NewExpression
    NewExpression(node: acorn.Node): IRNode {
      return compile((node as any).callee);
    },
    SequenceExpression(node: acorn.Node): IRNode {
      const expressions = (node as any).expressions;
      if (expressions.length === 0) {
        return { type: IRInst.EMPTY };
      }

      let result = compile(expressions[0]);
      for (let i = 1; i < expressions.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(expressions[i])],
        };
      }
      return result;
    },
    ArrowFunctionExpression(): IRNode {
      throw UnsupportedStatementError('ArrowFunctionExpression');
    },
    YieldExpression(): IRNode {
      throw UnsupportedStatementError('YieldExpression');
    },
    TemplateLiteral(): IRNode {
      return { type: IRInst.EMPTY };
    },
    TaggedTemplateExpression(): IRNode {
      return { type: IRInst.EMPTY };
    },
  } as Visitor;
}
function UnsupportedStatementError(statement: string) {
  const error = new Error(`Unsupported statement type: ${statement}`);
  error.name = 'UnsupportedStatementError';
  return error;
}

function compile(node: acorn.Node): IRNode {
  const visitor = createVisitor();
  const handler = visitor[node.type];

  if (!handler) {
    console.error(`Unsupported node type: ${node.type}`);
    return { type: IRInst.BLANK };
  }

  return handler(node);
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
