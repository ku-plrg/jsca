import * as acorn from 'acorn';
import { Function, IR, IRInst, IRNode } from '../utils/types';

type Visitor = {
  [key: string]: <T extends acorn.Node>(node: T) => IRNode;
};

function createVisitor(): Visitor {
  return {
    // Statements
    ExpressionStatement(node: acorn.ExpressionStatement): IRNode {
      return compile(node.expression);
    },
    BlockStatement(node: acorn.BlockStatement): IRNode {
      const statements = node.body;
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
    ReturnStatement(node: acorn.ReturnStatement): IRNode {
      const argument = node.argument;
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
    IfStatement(node: acorn.IfStatement): IRNode {
      const test = compile(node.test);
      const consequent = compile(node.consequent);
      const alternate = node.alternate
        ? compile(node.alternate)
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
    SwitchStatement(node: acorn.SwitchStatement): IRNode {
      const discriminant = compile(node.discriminant);
      const cases = node.cases;
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
    ThrowStatement(node: acorn.ThrowStatement): IRNode {
      return compile(node.argument);
    },
    TryStatement(node: acorn.TryStatement): IRNode {
      const block = compile(node.block);
      const handler = node.handler
        ? compile(node.handler.body)
        : { type: IRInst.EMPTY };
      const finalizer = node.finalizer
        ? compile(node.finalizer)
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
    WhileStatement(node: acorn.WhileStatement): IRNode {
      return {
        type: IRInst.LOOP,
        children: [compile(node.test), compile(node.body)],
      };
    },
    DoWhileStatement(node: acorn.DoWhileStatement): IRNode {
      return {
        type: IRInst.LOOP,
        children: [compile(node.test), compile(node.body)],
      };
    },
    ForStatement(node: acorn.ForStatement): IRNode {
      const init = node.init ? compile(node.init) : { type: IRInst.EMPTY };
      const test = node.test ? compile(node.test) : { type: IRInst.EMPTY };
      const update = node.update
        ? compile(node.update)
        : { type: IRInst.EMPTY };
      const body = compile(node.body);

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
    ForInStatement(node: acorn.ForInStatement): IRNode {
      return {
        type: IRInst.FORIN,
        children: [compile(node.left), compile(node.right), compile(node.body)],
      };
    },
    //TODO: ForOfStatement
    ForofStatement(): IRNode {
      throw UnsupportedStatementError('ForOfStatement');
    },
    FunctionDeclaration(): IRNode {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.VariableDeclaration): IRNode {
      const declarations = node.declarations.filter((decl) => decl.init);
      if (declarations.length === 0) {
        return { type: IRInst.EMPTY };
      }
      const result = declarations
        .map((decl) => ({
          type: IRInst.ASSIGN,
          children: [compile(decl.init as acorn.Expression), compile(decl.id)],
        }))
        .reduce((acc, assignInst) => ({
          type: IRInst.SEQ,
          children: [acc, assignInst],
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
        result = {
          type: IRInst.SEQ,
          children: [result, compile(elements[i] as acorn.Expression)],
        };
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
    BinaryExpression(node: acorn.BinaryExpression): IRNode {
      return {
        type: IRInst.SEQ,
        children: [compile(node.left), compile(node.right)],
      };
    },
    AssignmentExpression(node: acorn.AssignmentExpression): IRNode {
      return {
        type: IRInst.ASSIGN,
        children: [compile(node.right), compile(node.left)],
      };
    },
    LogicalExpression(node: acorn.LogicalExpression): IRNode {
      const left = compile(node.left);
      const right = compile(node.right);
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
    MemberExpression(node: acorn.MemberExpression): IRNode {
      const Objnode = compile(node.object);

      if (!node.computed && node.property.type === 'Identifier') {
        const prop_node = {
          type: IRInst.PROP,
          id: node.property.name,
          children: [{ type: IRInst.BLANK }],
        };
        return { type: IRInst.SEQ, children: [Objnode, prop_node] };
      }

      return { type: IRInst.EMPTY };
    },
    ConditionalExpression(node: acorn.ConditionalExpression): IRNode {
      const test = compile(node.test);
      const consequent = compile(node.consequent);
      const alternate = compile(node.alternate);
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
          children: [result, compile(args[i])],
        };
      }

      return {
        type: IRInst.SEQ,
        children: [result, callee],
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
      for (let i = 1; i < args.length; i++) {
        result = {
          type: IRInst.SEQ,
          children: [result, compile(args[i])],
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
