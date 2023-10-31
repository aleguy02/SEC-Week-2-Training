// var, let, and const

/*
let x = 1;  // let LETS variable be redefined
x = 2;
console.log(x)

const y = 1;  // const doesn't let variable be redefined
y = 2;  // this would raise an Error
console.log(y)
*/


/*
// global scope
var x= 1;
let y = "global 2";
const z = 3;


// local scope
function myFunc() {
  const z = 5;
  console.log(y)
  
  // local scope
  { // block scope
    let y = 4;
    console.log(y)
  } 
}

myFunc();
*/


// global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;
  console.log(`function: ${x}`)
  console.log(`function: ${y}`)
  console.log(`function: ${z}`)

  {
      var x = 11;
      const y = 6;
    console.log(`block: ${x}`)
    console.log(`block: ${y}`)
    console.log(`block: ${z}`)
  }
}

myFunc()