import { soma } from '@src/soma'

describe('test', () => {
  it('ok', () => {
    const result = soma(3, 4)
    expect(result).toEqual(5)
  })
})