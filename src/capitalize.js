export const capitalize = (text) => {
  if (typeof text !== 'string') {
    throw new TypeError(`Expected text to be of type string. Instead, got type of "${typeof text}"`)
  }

  const words = text.split(' ');

  const capitalized = words.map(w => {
    const head = w.slice(0, 1);
    const tail = w.slice(1, w.length);

    return `${head.toUpperCase()}${tail}`;
  });

  return capitalized.join(' ');
}
