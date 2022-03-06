import { soma } from '@src/soma'

describe('test in integration', () => {
  it('ok', () => {
    const result = soma(3, 4)
    expect(result).toEqual(7)
  })
})
