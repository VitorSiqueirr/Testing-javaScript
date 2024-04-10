export const groupBy = (array, propToGroup) => {
  if (!Array.isArray(array)) {
    throw new Error(
      `Invalid parameter. Expected an array but got "${typeof array}"!`
    );
  }

  const results = {};

  array.forEach((item) => {
    const propValue = item[propToGroup];
    const currentValues = results[propValue] || [];
    const newValues = [...currentValues, item];

    results[propValue] = newValues;
  });

  return results;
};

export const groupWith = (array, funcToGroup) => {
  if (!Array.isArray(array)) {
    throw new Error(
      `Invalid parameter. Expected an array but got "${typeof array}"!`
    );
  }

  const results = {};

  array.forEach((item) => {
    const propValue = funcToGroup(item);
    const currentValues = results[propValue] || [];
    const newValues = [...currentValues, item];

    results[propValue] = newValues;
  });

  return results;
};

// const users = [
//   { name: 'Felipe Nolleto', age: 28, mainSkill: 'JavaScript' },
//   { name: 'Debora da Silva', age: 22, mainSkill: 'JavaScript' },
//   { name: 'Jessica Rodrigues', age: 28, mainSkill: 'Ruby on Rails' },
//   { name: 'Felipe Castro', age: 40, mainSkill: 'Ruby on Rails' },
//   { name: 'Luan de Oliveira', age: 22, mainSkill: 'JavaScript' },
//   { name: 'Luan da Silva', age: 40, mainSkill: 'Ruby on Rails' },
// ]
//
// groupBy(users, 'age')
// groupBy(users, 'mainSkill')
// groupWith(users, (user) => {
//   const { name } = user
//   const [firstName] = name.split(' ')
//
//   return firstName
// })
