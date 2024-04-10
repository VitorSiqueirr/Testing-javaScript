import {
  afterEach,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  it,
} from 'vitest'

describe('Setup and Teardown', () => {
  beforeAll(() => {
    // Roda 1x antes de todo mundo
    console.log('[Describe 1] beforeAll')
  });

  beforeEach(() => {
    // Roda sempre antes de cada teste
    console.log('[Describe 1] beforeEach')
  });

  afterAll(() => {
    // Roda 1x depois de todo mundo
    console.log('[Describe 1] afterAll')
  });

  afterEach(() => {
    // Roda sempre depoir de cada teste
    console.log('[Describe 1] afterEach')
  });

  it('Teste 1', () => {
    console.log('[Describe 1] Teste 1');
  });

  it('Test 2', () => {
    console.log('[Describe 1] Test 2');
  });

  describe('Describe 2', () => {
    beforeAll(() => {
      console.log('[Describe 2] beforeAll')
    });

    beforeEach(() => {
      console.log('[Describe 2] beforeEach')
    });

    afterAll(() => {
      console.log('[Describe 2] afterAll')
    });

    afterEach(() => {
      console.log('[Describe 2] afterEach')
    });

    it('Teste 3', () => {
      console.log('[Describe 2] Teste 3');
    });

    it('Test 4', () => {
      console.log('[Describe 2] Test 4');
    });

    // describe(...)
  })
})