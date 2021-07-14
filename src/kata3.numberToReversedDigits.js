const numberToReversedDigits = number => {
const num = number;

const numArray = String(num).split("").map((num) => Number(num))

return numArray.reverse();

};

module.exports = numberToReversedDigits;
