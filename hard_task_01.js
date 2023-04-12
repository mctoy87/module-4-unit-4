"use strict";

// const getCommonFactor = (number1 number2) => {
//   let num1 = number1;
//   let num2 = number2;

//   if (num1 > num2) {
//     let division1 = num1/num2;
//   } else {

//   }
// }

// const toDivideNumbers = (numerator, denominator) => {   //делит большее число на меньшее
//   if (numerator > denominator) {
//     return numerator / denominator;
//   };
// return denominator / numerator;
// };
// console.log(toDivideNumbers(3,16));

// const getReminderDivision = (numerator, denominator) => { //возвращает остаток от деления
//   if (numerator > denominator) {
//     return numerator % denominator;
//   };
// return denominator % numerator;
// };
// console.log(getReminderDivision(3,16));

// const toDivideSmallerNumb = (numerator, denominator)  => {  //меньшее число делит на остаток
//   if (numerator > denominator) {
//     return denominator / getReminderDivision;
//   };
// return numerator / getReminderDivision(3,16);
// };
// console.log(toDivideSmallerNumb(3,16));



// const toDivideReminders = (numerator, denominator) => {   //первый остаток делим на второй
//   if (getReminderDivision(3,16) !== 0) {
//     return getReminderDivision(3,16) / getReminderDivision;
//   };
// return numerator / getReminderDivision(3,16);
// };
// console.log(toDivideSmallerNumb(3,16));



// const toDivideNumbers = (numerator, denominator) => {   //делит большее число на меньшее
//   if (numerator > denominator) {
//     let ReminderDivision = numerator % denominator;
    
//     if (ReminderDivision === 0) {
//       return denominator;
//     } else {
//       let result1 = denominator / ReminderDivision;
//       return result1;
//     }
//   } else {
//     let DivideNumbers = denominator / numerator;
//     let ReminderDivision = denominator % numerator;
//   }

// };
// console.log(toDivideNumbers(3,16));

// const getReminderDivision = (a, b) => {
//   if (a < b) {
//     return getReminderDivision(b, a);
//   };
  
//   if (b === 0) return a;
//   return getReminderDivision(b, a % b);
// }
// console.log(getReminderDivision(8,4));

const getReminderDivision = (a, b) => {
  if (a < b) {
    return getReminderDivision(b, a);
  };
  
  if (a % b === 0) return b;
  return getReminderDivision(b, a % b);
}
console.log(getReminderDivision(12,18));