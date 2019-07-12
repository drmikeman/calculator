import { create, all } from 'mathjs'

export class Calculator {
  errors: Array<any> = []
  math = create(all, {})

  constructor() {
    this.math.import([{ 'z': 5 }], { override: true })
    this.math.import([{ '$': 5 }], { override: true })
  }

  calculate(expression: string) {
    try {
      return this.math.evaluate(expression)
    } catch (error) {
      this.errors.push(error)

      return null
    }
  }

  symbols(expression: string) {
    try {
      const node = this.math.parse(expression)
      const filtered = node.filter(function (node) {
        return node.isSymbolNode
      })

      return filtered.map(symbol => symbol!.name!.toString())
    } catch (error) {
      this.errors.push(error)

      return []
    }
  }
}
