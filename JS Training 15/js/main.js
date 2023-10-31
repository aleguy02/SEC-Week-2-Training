// Arrays
/*
const myArray = [];

// add elements to an array
myArray[0] = "Dave"
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length)

// last element in an array
console.log(myArray[myArray.length - 1])
console.log()

myArray.unshift('school');  // unshift adds to the front
console.log(myArray);

const lastItem = myArray.pop();
console.log(myArray)
console.log(lastItem)
console.log()

myArray.shift()  // unshift removes from the front
console.log(myArray)

myArray.splice(1, 1, 42);  // .splice(position, # of elements you want to change, what you would want to change them to)
console.log(myArray)

myArray.splice(1, 0, 23);
console.log(myArray)
*/



let myArray = ['A', 'B', 'C', 'D', 'E', 'F'];

const newArray = myArray.slice(2);
console.log(newArray);

const newArray2 = myArray.reverse()
console.log(newArray2);

myArray = ['A', 'B', 'C', 'D', 'E', 'F'];
const newString = myArray.join()
console.log(newString)
const newArray3 = newString.split(',')
console.log(newArray3);
console.log('')

///

const my_ArrayA = ['A', 'B', 'C'];
const my_ArrayB = ['D', 'E', 'F'];

const new_Array = [...'iterable', ...my_ArrayB]
console.log(new_Array)
