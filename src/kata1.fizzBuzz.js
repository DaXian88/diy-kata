const fizzBuzz = number => {
	if(Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
	return "FizzBuzz"
}

	else if(Number.isInteger(number / 3)) {
	return "Fizz"
}
	else if(Number.isInteger(number / 5)) {
	return "Buzz"
}
	else{
	return number
}
};

module.exports = fizzBuzz;
