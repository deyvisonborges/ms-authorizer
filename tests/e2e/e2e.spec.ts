import { soma } from '@src/soma'

describe('test in e2e', () => {
  it('ok', () => {
    const result = soma(3, 4)
    expect(result).toEqual(5)
  })
})
