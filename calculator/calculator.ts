import * as MathJS from 'mathjs'

export class Calculator {
  errors: Array<any> = []

  constructor() {
    MathJS.import([{ '$': 5 }], { override: true })
  }

  calculate(expression: string) {
    try {
      return MathJS.eval(expression)
    } catch (error) {
      this.errors.push(error)

      return null
    }
  }
}
