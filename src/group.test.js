import { groupBy, groupWith } from "./group";

import { describe, expect, it } from "vitest";

const users = [
  { name: "Felipe Noleto", age: 28, mainSkill: "JavaScript" },
  { name: "Debora da Silva", age: 22, mainSkill: "JavaScript" },
  { name: "Jessica Rodrigues", age: 28, mainSkill: "Ruby on Rails" },
  { name: "Felipe Castro", age: 40, mainSkill: "Ruby on Rails" },
  { name: "Luan de Oliveira", age: 22, mainSkill: "JavaScript" },
  { name: "Luan da Silva", age: 40, mainSkill: "Ruby on Rails" },
];

describe("Group", () => {
  describe(".groupBy", () => {
    it("should return an object", () => {
      expect(groupBy(users, "age")).toBeInstanceOf(Object);
    });

    describe("when the first parameter is an array and the second is a string and apers in the array", () => {
      it("should return an object with the group", () => {
        const groupedUsers = groupBy(users, "age");
        const expectedGroup = {
          22: [
            { name: "Debora da Silva", age: 22, mainSkill: "JavaScript" },
            { name: "Luan de Oliveira", age: 22, mainSkill: "JavaScript" },
          ],
          28: [
            { name: "Felipe Noleto", age: 28, mainSkill: "JavaScript" },
            { name: "Jessica Rodrigues", age: 28, mainSkill: "Ruby on Rails" },
          ],
          40: [
            { name: "Felipe Castro", age: 40, mainSkill: "Ruby on Rails" },
            { name: "Luan da Silva", age: 40, mainSkill: "Ruby on Rails" },
          ],
        };
        expect(groupedUsers).toEqual(expectedGroup);
      });
    });

    describe("when de first parameter is not an array", () => {
      it("should throw an error", () => {
        expect(() => {
          groupBy(123, "age");
        }).toThrowError(
          `Invalid parameter. Expected an array but got "number"!`
        );
      });
    });

    describe("when the second parameter doesn't not appear in the array", () => {
      it("should return an object with a single key 'undefined'", () => {
        const result = groupBy(users, "identification");
        expect(Object.keys(result)).toEqual(["undefined"]);
        expect(result["undefined"]).toEqual(users);
      });
    });
  });

  describe(".groupWith", () => {
    it("should return an object", () => {
      expect(groupBy(users, "age")).toBeInstanceOf(Object);
    });

    describe("when the first parameter is an array and the second is a function", () => {
      it("show the group divided by name", () => {
        const group = groupWith(users, (user) => {
          const { name } = user;
          const [firstName] = name.split(" ");

          return firstName;
        });
        const expectedGroup = {
          Debora: [
            { name: "Debora da Silva", age: 22, mainSkill: "JavaScript" },
          ],
          Felipe: [
            { name: "Felipe Noleto", age: 28, mainSkill: "JavaScript" },
            { name: "Felipe Castro", age: 40, mainSkill: "Ruby on Rails" },
          ],
          Jessica: [
            { name: "Jessica Rodrigues", age: 28, mainSkill: "Ruby on Rails" },
          ],
          Luan: [
            { name: "Luan de Oliveira", age: 22, mainSkill: "JavaScript" },
            { name: "Luan da Silva", age: 40, mainSkill: "Ruby on Rails" },
          ],
        };

        expect(group).toEqual(expectedGroup);
      });
    });

    describe("when the first parameter is not an array", () => {
      it("throw an error", () => {
        expect(() => {
          groupWith("array", (user) => {
            const { name } = user;
            const [firstName] = name.split(" ");

            return firstName;
          });
        }).toThrowError(
          `Invalid parameter. Expected an array but got "string"!`
        );
      });
    });

    describe("when the second parameter doesn't not appear in the array", () => {
      it("should return an object with a single key 'undefined'", () => {
        const group = groupWith(users, (user) => {
          return user["randomProperty"];
        });
        const expectedGroup = {
          undefined: users,
        };
        expect(group).toEqual(expectedGroup);
      });
    });
  });
});
