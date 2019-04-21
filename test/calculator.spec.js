import { Calculator } from '../calculator/calculator'

describe('Calculator', () => {
  test('calculates an expression', () => {
    const calculator = new Calculator()
    expect(calculator.calculate('2+3')).toEqual(5)
  })

  test('returns null and stores an error when the expression is wrong', () => {
    const calculator = new Calculator()
    expect(calculator.calculate('2+')).toEqual(null)
    expect(calculator.errors.length).toEqual(1)
  })
})
