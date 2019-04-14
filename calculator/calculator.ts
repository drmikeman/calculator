import * as MathJS from 'mathjs'

export class Calculator {
  constructor() {
    MathJS.import([{ "$": 5 }], { override: true })
  }

  calculate (expression) {
    try {
      return MathJS.eval(expression)
    } catch(error) {
      return null
    }
  }
}
