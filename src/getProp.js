export const getProp = (object, prop) => {
  const objectType = typeof object;
  const propType = typeof prop;

  if (objectType !== "object") {
    throw new Error(
      `The first argument must to be an object, instead of "${objectType}"`
    );
  }

  if (propType !== "string" && !Array.isArray(prop)) {
    throw new Error(
      `The second argument must to be a string OR an array, instead of "${propType}"`
    );
  }

  if (Array.isArray(prop)) {
    let currentObject = object;
    let nextPropItem = prop.shift();

    while (nextPropItem) {
      currentObject = currentObject[nextPropItem];
      nextPropItem = prop.shift();
    }

    return currentObject;
  } else {
    return object[prop];
  }
};

// const person = {
//   name: 'Matheus das Neves',
//   age: 40,
//   address: {
//     street: 'Rua São João',
//     number: 123,
//   },
//   skills: [
//     { id: 1, name: 'JavaScript', yearOfExperience: 5 },
//     { id: 2, name: 'Ruby on Rails', yearOfExperience: 2 },
//   ]
// }
//
// getProp(person, 'name') // Matheus das Neves
// getProp(person, 'age') // 40
// getProp(person, ['address', 'number']) // 123
// getProp(person, ['skills', '0', 'name']) // JavaScript
// getProp(person, ['skills', '1', 'yearOfExperience']) // 2
