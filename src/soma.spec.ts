import { soma } from './soma'

describe('test in unit', () => {
  it('ok', () => {
    const result = soma(3, 4)
    expect(result).toEqual(5)
  })
})