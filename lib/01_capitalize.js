const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const otherLetters = word.substr(1).toLowerCase();
  // interpolation
  return `${firstLetter}${otherLetters}`
};

const people = ['florEStan', 'saBina', 'guadalUpe'];
const newPeople = people.map(capitalize);
console.log(newPeople);
