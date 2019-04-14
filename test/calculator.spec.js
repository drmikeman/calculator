import { Calculator } from '../calculator/calculator'

describe('Calculator', () => {
  test('calculates an expression', () => {
    const calculator = new Calculator()
    expect(calculator.calculate('2+3')).toEqual(5)
  })
})
