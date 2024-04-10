import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import axios from "axios";
import { blogService } from "./blogService";

const MOCKED_POSTS = [
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
  { id: 3, title: "title 3" },
  { id: 4, title: "title 4" },
];

const MOCKED_POST = [{ id: 1, title: "title 1" }];

describe('BlogService - Using "vi.spyOn"', () => {
  const axiosGet = vi.spyOn(axios, "get");

  // beforeEach(() => {
  //   vi.clearAllMocks();
  // });

  describe(".fetchPosts", () => {
    beforeEach(() => {
      axiosGet.mockReturnValue({ data: MOCKED_POSTS });
      // mockResolvedValue
    });

    it('calls "axios.get" one time', async () => {
      await blogService.fetchPosts();

      expect(axiosGet).toHaveBeenCalledTimes(1);
      expect(axiosGet).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts"
      );
    });

    describe("when successfully", () => {
      it('returns "axios.get" response data', async () => {
        const post = await blogService.fetchPosts();
        expect(post).toEqual(MOCKED_POSTS);
      });
    });

    describe("when fails", () => {
      const error = new Error("Something went wrong!");

      beforeEach(() => {
        axiosGet.mockRejectedValue(error);
      });

      it("throws an error", async () => {
        await expect(blogService.fetchPosts()).rejects.toThrowError(error);
      });
    });
  });

  describe(".fetchPost", () => {
    beforeEach(() => {
      axiosGet.mockReturnValue({ data: MOCKED_POST });
    });

    it('calls "axios.get" one time', async () => {
      await blogService.fetchPost(1);

      expect(axiosGet).toHaveBeenCalledTimes(1);
      expect(axiosGet).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
    });

    describe("when successfully", () => {
      it('returns "axios.get" response data', async () => {
        const post = await blogService.fetchPost(1);
        expect(post).toEqual(MOCKED_POST);
      });
    });

    describe("when fails", () => {
      const error = new Error("Something went wrong!");

      beforeEach(() => {
        axiosGet.mockRejectedValue(error);
      });

      it("throws an error", async () => {
        await expect(blogService.fetchPost(1)).rejects.toThrowError(error);
      });
    });
  });
});
