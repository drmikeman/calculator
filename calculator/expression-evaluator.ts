import { create, all } from 'mathjs'

export class ExpressionEvaluator {
  math: math.MathJsStatic

  constructor() {
    this.math = create(all, {})
  }

  evaluate(expression: string, scope: any = {}) {
    return this.math.evaluate(expression, scope)
  }
}

// expression:
// isParsed
// formula? expression? content?
// evaluate(scope)
// parse()
