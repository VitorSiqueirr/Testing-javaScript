export const getRandomItem = (array) => {
  if (!Array.isArray(array)) {
    throw new Error(`You must pass an array instead of "${typeof array}"`);
  } else if (array.length === 0) {
    console.warn(
      'Unable to get a random item from an empty array! Returning "null"...'
    );
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

// const names = ['Felipe Nascimento', 'Fabio Akita', 'Henrique Yuji']
//
// getRandomItem(names) // any value from `names`
// getRandomItem('test') // Error: You must pass an array instead of "string"
