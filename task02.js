"use strict";

const changeStrict = (str) => {
    let newStr = str.toLowerCase(); 

    let firstLetter = newStr[0];
    firstLetter = firstLetter.toUpperCase();

    let lowerCaseLetter = newStr.substring(1);

    newStr = firstLetter + lowerCaseLetter;
    
    return newStr;
}

console.log (changeStrict ('пРивеТ Мир'));
