export const shuffle = (array) => {
  const shuffledArray = []
  const clonedArray = [...array]

  while (clonedArray.length) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length);
    const [randomItem] = clonedArray.splice(randomIndex, 1)

    shuffledArray.push(randomItem);
  }

  return shuffledArray
}