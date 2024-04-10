import { beforeEach, describe, expect, it, vi } from "vitest";
import { showSinglePost } from "./showSinglePost";
import { blogService } from "./blogService";

describe("showSinglePost", () => {
  const blogServiceFetch = vi.spyOn(blogService, "fetchPost");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls 'blogService fetchPost' one time", async () => {
    const postId = 3;
    await showSinglePost(postId);

    expect(blogServiceFetch).toHaveBeenCalledTimes(1);
    expect(blogServiceFetch).toHaveBeenCalledWith(postId);
  });

  describe("when calls showSinglePost with a valid parameter", () => {
    it("got the right post and returned undefined", async () => {
      const expected = {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\n" +
          "suscipit recusandae consequuntur expedita et cum\n" +
          "reprehenderit molestiae ut ut quas totam\n" +
          "nostrum rerum est autem sunt rem eveniet architecto",
      };

      const consoleLog = vi.spyOn(console, "log");

      const data = await showSinglePost(1);

      expect(consoleLog).toHaveBeenCalledWith(expected);
      expect(data).toBe(undefined);
    });
  });

  describe("when calls showSinglePost with a invalid parameter", () => {
    it("throw an erro and a message", async () => {
      const consoleLog = vi.spyOn(console, "log");

      await expect(() => showSinglePost("invalid")).rejects.toThrowError(
        'Unable to get post with id "invalid"!'
      );

      expect(consoleLog).toHaveBeenCalledWith(
        'Unable to get post with id "invalid"!'
      );
    });
  });

  describe("when calls showSinglePost for a post that doesn't exists", () => {
    it("throw an error and a message", async () => {
      {
        const consoleLog = vi.spyOn(console, "log");

        await expect(() => showSinglePost("invalid")).rejects.toThrowError(
          'Unable to get post with id "invalid"!'
        );

        expect(consoleLog).toHaveBeenCalledWith(
          'Unable to get post with id "invalid"!'
        );
      }
    });
  });
});
