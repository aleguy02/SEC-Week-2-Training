// Numbers

// An integer is a whole number.
const myNumber = 42;

const myFloat = 42.0151;

const myString = "42.123abc"

console.log(myNumber)
console.log(myFloat)
console.log(myString)
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log("")

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number(myString === "42"))
console.log("")

console.log(Number.isInteger(myNumber))
console.log(Number.parseFloat(myFloat))
console.log(Number.parseFloat(myString))
console.log(typeof Number.parseFloat(myString))
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));


//The Number.isInteger() method determines whether the passed value is an integer

//The toString() method returns a string representing the number

console.log(typeof Number.parseFloat(myString))

//Chaining goes from left process to right process

console.log(Number.parseFloat("4.237ABC").toFixed(2).toString())
console.log("")

console.log(Number.isNaN("Dave"))
console.log(isNaN("Dave"))
