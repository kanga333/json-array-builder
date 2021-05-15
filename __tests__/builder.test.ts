import {buildArray} from '../src/builder'

describe('builder', () => {
  it('buildArray can build array from newline string', () => {
    const array = buildArray('a\nb', 'newline', '')
    expect(array).toBe('["a","b"]')
  })

  it('buildArray can build array from space string', () => {
    const array = buildArray('a b', 'space', '')
    expect(array).toBe('["a","b"]')
  })

  it('buildArray can build array from csv', () => {
    const array = buildArray('a,b', ',', '')
    expect(array).toBe('["a","b"]')
  })

  it('buildArray can append items to json_array', () => {
    const array = buildArray('c,d', ',', '["a","b"]')
    expect(array).toBe('["a","b","c","d"]')
  })
})
