import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import { blogService } from "./blogService";
import { listPosts } from "./listPosts";

vi.mock('./blogService')

const FETCH_POSTS_RESPONSE = [
  { id: 1, userId: 1, title: 'title 1' },
  { id: 2, userId: 2, title: 'title 2' },
  { id: 3, userId: 1, title: 'title 3' },
]

describe('listPosts', () => {
  const consoleTable = vi.spyOn(console, 'table').mockImplementation(() => { /* just to silent */ })
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { /* just to silent */ })

  beforeAll(() => {
    blogService.fetchPosts.mockResolvedValue(FETCH_POSTS_RESPONSE)
  })

  // we can also set it in the configs:
  // https://vitest.dev/config/#clearmocks
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls "blogService.fetchPosts"', async () => {
    await listPosts()

    expect(blogService.fetchPosts).toHaveBeenCalled()
  })

  describe('when successfully', () => {
    it('calls "console.table" with "userId" and "title"', async () => {
      await listPosts()

      expect(consoleTable).toHaveBeenCalledTimes(1)
      expect(consoleTable).toHaveBeenCalledWith(
        [
          {
            userId: 1,
            title: "title 1",
          },
          {
            userId: 2,
            title: "title 2",
          },
          {
            userId: 1,
            title: "title 3",
          },
        ]
      )
    })

    it('does not call "console.error"', async () => {
      await listPosts()

      expect(consoleError).not.toHaveBeenCalled()
    })

    it('return undefined', async () => {
      await expect(listPosts())
        .resolves
        .toBeUndefined()

      // Or:
      // const result = await listPosts()
      // expect(result).toBeUndefined()
    })
  })

  describe('when fails', () => {
    const error = new Error('Something is not right!')

    beforeAll(() => {
      blogService.fetchPosts.mockRejectedValue(error)
    })

    it('does not call "console.table"', async () => {
      await listPosts()

      expect(consoleTable).not.toHaveBeenCalled()
    })

    it('calls "console.error" with error', async () => {
      await listPosts()

      expect(consoleError).toHaveBeenCalledTimes(1)
      expect(consoleError).toHaveBeenCalledWith(error)
    })

    it('return undefined', async () => {
      await expect(listPosts())
        .resolves
        .toBeUndefined()
    })
  })
})