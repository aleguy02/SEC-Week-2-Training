// Functions

// Methods are built-in functions

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 6))

function getUsernameFromEmail(email) {
  return email.slice(0, email.indexOf('@'))
}

console.log(getUsernameFromEmail('aleguy@hotmail.com'))
console.log(getUsernameFromEmail('user@githun.com'))

// anonymous function

const getUsernameFromEmail2 = function (email) {
  return email.slice(0, email.indexOf('@'))
}

console.log(getUsernameFromEmail2('aleguy@hotmail.com'))

// arrow functions

const getUsernameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf('@'))
}

console.log(getUsernameFromEmail3('aleguy3@hotmail.com'))

console.log()

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("aLeJandrO"))