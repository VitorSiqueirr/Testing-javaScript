import { describe, expect, it } from "vitest";
import { getProp } from "./getProp";

const OBJECT = {
  name: "Matheus das Neves",
  age: 40,
  address: {
    street: "Rua São João",
    number: 123,
  },
  skills: [
    { id: 1, name: "JavaScript", yearOfExperience: 5 },
    { id: 2, name: "Ruby on Rails", yearOfExperience: 2 },
  ],
};

describe("getProp", () => {
  describe("when the prop is a string and exists in the object", () => {
    it("return the correct prop", () => {
      expect(getProp(OBJECT, "name")).toBe("Matheus das Neves");
    });
  });

  describe("when the prop is a string and doesn't in the object", () => {
    it("return the undefined", () => {
      expect(getProp(OBJECT, "idade")).toBe(undefined);
    });
  });

  describe("when te prop is an array and exists in the object", () => {
    it("return the correct prop", () => {
      expect(getProp(OBJECT, ["skills", "1", "yearOfExperience"])).toBe(2);
    });
  });

  describe("when te prop is an array and doesn't exists in the object", () => {
    it("return the correct prop", () => {
      expect(getProp(OBJECT, ["skills", "1", "academicEducation"])).toBe(
        undefined
      );
    });
  });

  describe("when the second parameter is not a string or an array", () => {
    it("raise an error", () => {
      expect(() => getProp(OBJECT, 1)).toThrowError(
        'The second argument must to be a string OR an array, instead of "number"'
      );
    });
  });

  describe("when the prop is a string representing a nested property", () => {
    it("returns the undefined", () => {
      expect(getProp(OBJECT, "address.street")).toBe(undefined);
    });
  });

  describe("when the first parameter is not a object", () => {
    it("raise an error", () => {
      expect(() => getProp("OBJECT", "name")).toThrowError(
        'The first argument must to be an object, instead of "string"'
      );
    });
  });

  describe("when the first parameter is an empty object", () => {
    it("returns undefined", () => {
      expect(getProp({}, "name")).toBe(undefined);
    });
  });
});
