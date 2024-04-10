import { groupBy, groupWith } from "../src/group.js";

const users = [
  { name: "Felipe Nolleto", age: 28, mainSkill: "JavaScript" },
  { name: "Debora da Silva", age: 22, mainSkill: "JavaScript" },
  { name: "Jessica Rodrigues", age: 28, mainSkill: "Ruby on Rails" },
  { name: "Felipe Castro", age: 40, mainSkill: "Ruby on Rails" },
  { name: "Luan de Oliveira", age: 22, mainSkill: "JavaScript" },
  { name: "Luan da Silva", age: 40, mainSkill: "Ruby on Rails" },
];

console.log("\n");
console.log("### Group ###");
console.log("\n## Original array ##");
console.table(users);

console.log('\n## Grouped by "age" ##');
console.log(groupBy(users, "age"));

console.log('\n## Grouped by "mainSkill" ##');
console.log(groupBy(users, "mainSkill"));

console.log("\n## Grouped by First Name ##");
console.log(
  groupWith(users, (user) => {
    const { name } = user;
    const [firstName] = name.split(" ");

    return firstName;
  })
);
console.log("\n");
