import classNames from './classNames'

describe('classNames', () => {
  test('with first parameter', () => {
    const expected = 'test-class'
    expect(classNames('test-class')).toBe(expected)
  })

  test('with additional class', () => {
    const expected = 'test-class additional1 additional2'
    expect(classNames('test-class', {}, ['additional1', 'additional2'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'test-class additional1 additional2 mod1 mod2'
    expect(classNames(
      'test-class',
      { mod1: true, mod2: true },
      ['additional1', 'additional2']
    )).toBe(expected)
  })

  test('with falsy mod', () => {
    const expected = 'test-class additional1 additional2 mod2'
    expect(classNames(
      'test-class',
      { mod1: false, mod2: true },
      ['additional1', 'additional2']
    )).toBe(expected)
  })
})
