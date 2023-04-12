"use strict";

let num1 = prompt('ВВедите число №1', '');
let num2 = prompt('ВВедите число №2', '');

num1 = Number(num1);
num2 = Number(num2);


const getMinNumber = (x, y) => {
  if (Math.floor(num1/num2) === 0) {
    return num2;
  }
return num1;
};

const result = getMinNumber (num1, num2)
console.log('Максимальное число: ', result);