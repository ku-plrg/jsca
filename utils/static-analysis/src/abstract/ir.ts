import * as acorn from 'acorn';
import { Function, IR, IRInst, IRNode } from '../utils/types';

type Visitor = {
  [key: string]: (node: acorn.Node) => IRNode;
};

function createVisitor(): Visitor {
  return {
    // Statements
    ExpressionStatement(node: acorn.Node): IRNode {
      const exprNode = node as acorn.ExpressionStatement;
      return compile(exprNode.expression);
    },
    BlockStatement(node: acorn.Node): IRNode {
      const blockNode = node as acorn.BlockStatement;
      const statements = blockNode.body;
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
      const returnNode = node as acorn.ReturnStatement;
      const argument = returnNode.argument;
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
      const ifNode = node as acorn.IfStatement;
      const test = compile(ifNode.test);
      const consequent = compile(ifNode.consequent);
      const alternate = ifNode.alternate
        ? compile(ifNode.alternate)
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
      const switchNode = node as acorn.SwitchStatement;
      const discriminant = compile(switchNode.discriminant);
      const cases = switchNode.cases;
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
      const throwNode = node as acorn.ThrowStatement;
      return compile(throwNode.argument);
    },
    TryStatement(node: acorn.Node): IRNode {
      const tryNode = node as acorn.TryStatement;
      const block = compile(tryNode.block);
      const handler = tryNode.handler
        ? compile(tryNode.handler.body)
        : { type: IRInst.EMPTY };
      const finalizer = tryNode.finalizer
        ? compile(tryNode.finalizer)
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
      const whileNode = node as acorn.WhileStatement;
      return {
        type: IRInst.LOOP,
        children: [compile(whileNode.test), compile(whileNode.body)],
      };
    },
    DoWhileStatement(node: acorn.Node): IRNode {
      const doWhileNode = node as acorn.DoWhileStatement;
      return {
        type: IRInst.LOOP,
        children: [compile(doWhileNode.test), compile(doWhileNode.body)],
      };
    },
    ForStatement(node: acorn.Node): IRNode {
      const forNode = node as acorn.ForStatement;
      const init = forNode.init
        ? compile(forNode.init)
        : { type: IRInst.EMPTY };
      const test = forNode.test
        ? compile(forNode.test)
        : { type: IRInst.EMPTY };
      const update = forNode.update
        ? compile(forNode.update)
        : { type: IRInst.EMPTY };
      const body = compile(forNode.body);

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
      const forInNode = node as acorn.ForInStatement;
      return {
        type: IRInst.FORIN,
        children: [
          compile(forInNode.left),
          compile(forInNode.right),
          compile(forInNode.body),
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
      const varNode = node as acorn.VariableDeclaration;
      const declarations = varNode.declarations.filter((decl) => decl.init);
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
    ArrayExpression(node: acorn.Node): IRNode {
      const arrayNode = node as acorn.ArrayExpression;
      const elements = arrayNode.elements;
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
    UnaryExpression(node: acorn.Node): IRNode {
      const unaryNode = node as acorn.UnaryExpression;
      return compile(unaryNode.argument);
    },
    UpdateExpression(node: acorn.Node): IRNode {
      const updateNode = node as acorn.UpdateExpression;
      return compile(updateNode.argument);
    },
    BinaryExpression(node: acorn.Node): IRNode {
      const binaryNode = node as acorn.BinaryExpression;
      return {
        type: IRInst.SEQ,
        children: [compile(binaryNode.left), compile(binaryNode.right)],
      };
    },
    AssignmentExpression(node: acorn.Node): IRNode {
      const assignNode = node as acorn.AssignmentExpression;
      return {
        type: IRInst.ASSIGN,
        children: [compile(assignNode.right), compile(assignNode.left)],
      };
    },
    LogicalExpression(node: acorn.Node): IRNode {
      const logicalNode = node as acorn.LogicalExpression;
      const left = compile(logicalNode.left);
      const right = compile(logicalNode.right);
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
      const memberNode = node as acorn.MemberExpression;
      const Objnode = compile(memberNode.object);

      if (!memberNode.computed && memberNode.property.type === 'Identifier') {
        const prop_node = {
          type: IRInst.PROP,
          id: memberNode.property.name,
          children: [{ type: IRInst.BLANK }],
        };
        return { type: IRInst.SEQ, children: [Objnode, prop_node] };
      }

      return { type: IRInst.EMPTY };
    },
    ConditionalExpression(node: acorn.Node): IRNode {
      const condNode = node as acorn.ConditionalExpression;
      const test = compile(condNode.test);
      const consequent = compile(condNode.consequent);
      const alternate = compile(condNode.alternate);
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
      const callNode = node as acorn.CallExpression;
      const callee = compile(callNode.callee);
      const args = callNode.arguments;
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
    NewExpression(node: acorn.Node): IRNode {
      const newNode = node as acorn.NewExpression;
      const callee = compile(newNode.callee);
      const args = newNode.arguments;
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
      const seqNode = node as acorn.SequenceExpression;
      const expressions = seqNode.expressions;
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
