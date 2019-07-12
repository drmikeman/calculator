import { Calculator } from '~/calculator/calculator'

export class Item {
  private _expression: string = ''
  name: string
  result: number | null = null
  symbols: Array<string> = []
  errors: Array<string> = []

  constructor(name: string, expression: string) {
    this.name = name
    this.expression = expression
  }

  get expression(): string {
    return this._expression
  }

  set expression(expression: string) {
    this._expression = expression
    const calc = new Calculator()
    this.result = calc.calculate(this._expression)
    this.symbols = calc.symbols(this._expression)
    this.errors = calc.errors
  }
}
