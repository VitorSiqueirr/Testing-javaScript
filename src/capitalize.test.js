import { describe, expect, it } from 'vitest'

import { capitalize } from './capitalize'

describe('capitalize', () => {
  it('returns string capitalized', () => {
    expect(capitalize('sandi metz')).toBe('Sandi Metz')
  })

  describe('when string is already capitalized', () => {
    it('returns the same text', () => {
      expect(capitalize('Sandi Metz')).toBe('Sandi Metz')
    })
  })

  describe('when passing an number', () => {
    it('throws an error', () => {
      expect(() => capitalize(123))
        .toThrowError('Expected text to be of type string. Instead, got type of "number"')
    })
  })

  describe('when passing an array', () => {
    it('throws an error', () => {
      expect(() => capitalize(['sandi metz']))
        .toThrowError('Expected text to be of type string. Instead, got type of "object"')
    })
  })

  describe('when passing an object', () => {
    it('throws an error', () => {
      expect(() => capitalize({ name: 'sandi metz' }))
        .toThrowError('Expected text to be of type string. Instead, got type of "object"')
    })
  })

  describe('when passing a boolean', () => {
    it('throws an error', () => {
      expect(() => capitalize(true))
        .toThrowError('Expected text to be of type string. Instead, got type of "boolean"')
    })
  })
})