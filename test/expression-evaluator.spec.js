import { ExpressionEvaluator } from '../calculator/expression-evaluator'

describe('ExpressionEvaluator', () => {
  test('calculates an expression', () => {
    const evaluator = new ExpressionEvaluator()
    expect(evaluator.evaluate('2+3')).toEqual(5)
  })

  test('calculates an expression containing variables', () => {
    const evaluator = new ExpressionEvaluator()
    expect(evaluator.evaluate('2*a', { a: 3 })).toEqual(6)
  })

  test('***freewriting***', () => {
    const board = {
      columns: [
        { name: 'index', expressions: ['0', '1*2'] },
        { name: 'variable', expressions: ['2', '5*2'] }
      ]
    }
  })
})
