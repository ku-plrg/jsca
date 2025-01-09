import * as acorn from 'acorn';
import { Function, IR, IRInst, IRNode } from '../utils/types';

type Visitor = {
  [key: string]: (node: acorn.Node) => IRNode;
};

function createVisitor(): Visitor {
  return {
    // Statements
    ExpressionStatement(node: acorn.Node): IRNode {
      return compile((node as any).expression);
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
      throw UnsupportedStatementError('DebuggerStatement');
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
      throw UnsupportedStatementError('LabeledStatement');
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
    SwitchStatement(node: acorn.Node): IRNode {
      const discriminant = compile((node as any).discriminant);
      const cases = (node as any).cases;
      if (cases.length === 0) {
        return { type: IRInst.EMPTY };
      }

      let result = compile(cases[0]);
      for (let i = 1; i < cases.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(cases[i])],
        };
      }
      return {
        type: IRInst.SEQ,
        children: [discriminant, result],
      };
    },
    ThrowStatement(node: acorn.Node): IRNode {
      return compile((node as any).argument);
    },
    TryStatement(node: acorn.Node): IRNode {
      const block = compile((node as any).block);
      const handler = (node as any).handler
        ? compile((node as any).handler.body)
        : { type: IRInst.EMPTY };
      const finalizer = (node as any).finalizer
        ? compile((node as any).finalizer)
        : { type: IRInst.EMPTY };
      return {
        type: IRInst.SEQ,
        children: [
          block,
          {
            type: IRInst.SEQ,
            children: [handler, finalizer],
          },
        ],
      };
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
          compile((node as any).body) as IRNode,
        ],
      };
    },
    //TODO: ForOfStatement
    ForofStatement(node: acorn.Node): IRNode {
      throw UnsupportedStatementError('ForOfStatement');
    },
    FunctionDeclaration(): IRNode {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.Node): IRNode {
      const declarations = (node as any).declarations;
      if (declarations.length === 0) {
        return { type: IRInst.EMPTY };
      }
      let result = compile((declarations[0] as any).init);
      for (let i = 1; i < declarations.length; i++) {
        if ((declarations[i] as any).init) {
          result = {
            type: IRInst.SEQ,
            children: [result, compile((declarations[i] as any).init)],
          };
        }
      }
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
    //TODO: MemberExpression can have some missing cases
    MemberExpression(node: acorn.Node): IRNode {
      const { computed, property, object } = node as any;
      const Objnode = compile(object);

      if (!computed && property?.type === 'Identifier') {
        const prop_node = {
          type: IRInst.PROP,
          id: property.name,
          children: [{ type: IRInst.BLANK }],
        };
        return { type: IRInst.SEQ, children: [Objnode, prop_node] };
      }

      return { type: IRInst.EMPTY };
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
      const callee = compile((node as any).callee);
      const args = (node as any).arguments;
      if (args.length === 0) {
        return callee;
      }
      let result = callee;
      for (let i = 1; i < args.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(args[i])],
        };
      }
      return result;
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
      throw UnsupportedStatementError('TemplateLiteral');
    },
    TaggedTemplateExpression(): IRNode {
      throw UnsupportedStatementError('TaggedTemplateExpression');
    },
  } as Visitor;
}
function UnsupportedStatementError(statement: string) {
  const error = new Error(`Unsupported statement type: ${statement}`);
  error.name = 'UnsupportedStatementError';
  return error;
}

export function compile(node: acorn.Node): IRNode {
  const visitor = createVisitor();
  try {
    const handler = visitor[node.type];

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
