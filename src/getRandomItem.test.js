import { describe, expect, it } from "vitest";
import { getRandomItem } from "./getRandomItem";

const names = ["Felipe Nascimento", "Fabio Akita", "Henrique Yuji"];

describe("getRandomItem", () => {
  describe("when the parameter is an array", () => {
    it("return an item from the array", () => {
      expect(names).toContain(getRandomItem(names));
    });
  });

  describe("when the parameter is not an array", () => {
    it("throw an error", () => {
      expect(() => getRandomItem(13231)).toThrowError(
        'You must pass an array instead of "number"'
      );
    });
  });

  describe("when the array is empty", () => {
    it("return null if the array is empty", () => {
      expect(getRandomItem([])).toBeNull();
    });
  });

  describe("when the array is a single item", () => {
    it("return the single item", () => {
      const singleItemArray = ["only item"];
      expect(getRandomItem(singleItemArray)).toBe("only item");
    });
  });
});
