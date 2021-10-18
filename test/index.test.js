const main = require('../src')

describe('main', () => {
  it('does nothing', () => {
    expect(main('null', 0)).toBe(undefined)
  })
})
