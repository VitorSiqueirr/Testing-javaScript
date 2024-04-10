import { describe, expect, it } from 'vitest'

import { shuffle } from './shuffle'

describe('shuffle', () => {
  it('returns all items from the original array', () => {
    const array = [1, 2, 3, 4, 5]
    const shuffled = shuffle(array)

    expect(shuffled).toContain(1)
    expect(shuffled).toContain(2)
    expect(shuffled).toContain(3)
    expect(shuffled).toContain(4)
    expect(shuffled).toContain(5)
  })

  it('returns all items in different order', () => {
    const array = [1, 2, 3, 4, 5]

    expect(shuffle(array)).not.toEqual(array)
  })

  it('does not mutate the original array', () => {
    const array = [1, 2, 3, 4, 5]

    shuffle(array)

    expect(array).toEqual([1, 2, 3, 4, 5])
  })
})