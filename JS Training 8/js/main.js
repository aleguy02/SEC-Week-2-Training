let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);

let testScore = 89;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`);
