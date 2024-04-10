import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import axios from "axios";
import { blogService } from "./blogService";

vi.mock("axios");

const MOCKED_POSTS = [
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
  { id: 3, title: "title 3" },
  { id: 4, title: "title 4" },
];

const MOCKED_POST = [{ id: 1, title: "title 1" }];

describe('BlogService - Using "vi.mock"', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe(".fetchPosts", () => {
    beforeAll(() => {
      const response = {
        data: MOCKED_POSTS,
      };
      axios.get.mockResolvedValue(response);
    });
    it('calls "axios.get"', async () => {
      await blogService.fetchPosts();

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts"
      );
    });

    describe("when successfully", () => {
      it('returns "axios.get" response data', async () => {
        await expect(blogService.fetchPosts()).resolves.toEqual(MOCKED_POSTS);
      });
    });

    describe("when fails", () => {
      const error = new Error("Something went wrong!");

      beforeAll(() => {
        axios.get.mockRejectedValue(error);
      });

      it("throws an error", async () => {
        await expect(blogService.fetchPosts()).rejects.toThrowError(
          "Something went wrong!"
        );
      });
    });
  });

  describe(".fetchPost", () => {
    beforeAll(() => {
      const response = {
        data: MOCKED_POST,
      };
      axios.get.mockResolvedValue(response);
    });

    it('calls "axios.get" one time', async () => {
      await blogService.fetchPost(1);

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
    });

    describe("when successfully", () => {
      it('returns "axios.get" response data', async () => {
        const post = await blogService.fetchPost(10);
        expect(post).toEqual(MOCKED_POST);
      });
    });

    describe("when fails", () => {
      const error = new Error("Something went wrong!");

      beforeAll(() => {
        axios.get.mockRejectedValue(error);
      });

      it("throws an error", async () => {
        await expect(blogService.fetchPost(1)).rejects.toThrowError(error);
      });
    });
  });
});
