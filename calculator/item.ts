import { Calculator } from '~/calculator/calculator'

export class Item {
  private _expression: string = ''
  result: number | null = null
  errors: Array<string> = []

  constructor(expression: string) {
    this.expression = expression
  }

  get expression(): string {
    return this._expression
  }

  set expression(expression: string) {
    this._expression = expression
    const calc = new Calculator()
    this.result = calc.calculate(this._expression)
    this.errors = calc.errors
  }
}
