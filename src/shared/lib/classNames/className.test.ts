import classNames from './classNames'

describe('classNames', () => {
  test('with first parameter only', () => {
    expect(classNames('testClass')).toBe('testClass')
  })

  test('with additional classes', () => {
    const expected = 'testClass add1 add2'
    expect(classNames('testClass', {}, ['add1', 'add2'])).toBe(expected)
  })

  test('with all parameters', () => {
    const expected = 'testClass add1 add2 mode'
    expect(classNames('testClass', { mode: true }, ['add1', 'add2'])).toBe(expected)
  })

  test('with falsy mode', () => {
    const expected = 'testClass add1 add2 mode'
    expect(classNames('testClass', { mode: true, falsy: false }, ['add1', 'add2'])).toBe(expected)
  })

  test('with nullish modes', () => {
    const expected = 'testClass add1 add2 mode'
    expect(classNames(
      'testClass',
      // @ts-expect-error It`s ok to disable typescript here. I want to test unpredictable case
      { mode: true, nullMode: null, undefinedMode: undefined },
      ['add1', 'add2'])
    ).toBe(expected)
  })
})
