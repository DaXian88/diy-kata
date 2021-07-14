const joinNames = namesObj => {
  let names = [];
  for (let i = 0; i < namesObj.length; i += 1) {
    names.push(namesObj[i].name);
  }
  if (names.length === 1) {
    return names.toString();
  }
  if (names.length === 2) {
    return names.join(" & ");
  }
  return `${names.slice(0, -1).join(", ")} & ${names.slice(-1)}`;
};

module.exports = joinNames;
