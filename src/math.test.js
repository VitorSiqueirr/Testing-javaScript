import * as math from './math'

import { describe, expect, it, vi } from 'vitest'

describe('Math', () => {
  describe('.add', () => {
    it('sums both values', () => {
      expect(math.add(4, 2)).toBe(6)
    })
  })

  describe('.minus', () => {
    it('decrement second value from first value', () => {
      expect(math.minus(1, 2)).toBe(-1)
    })
  })

  describe('.multiply', () => {
    it('multiply both values', () => {
      expect(math.multiply(4, 8)).toBe(32)
    })
  })

  describe('.divide', () => {
    it('divide first value by second value', () => {
      expect(math.divide(10, 2)).toBe(5)
    })
  })

  describe('.double', () => {
    it('double the value', () => {
      expect(math.double(10)).toBe(20)
    })
  })
})