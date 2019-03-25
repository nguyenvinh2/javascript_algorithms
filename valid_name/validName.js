'use strict';

function validNameCheck(inputName) {
  let inputArray = inputName.split(" ");
  console.log(inputArray);
  if (inputArray.length <2) {
    console.log('fails word length check');
    return false;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].includes(".") && inputArray[i].length > 2) {
      console.log('fails initial check')
      return false;
    }
    if (inputArray[i][0] !== inputArray[i][0].toUpperCase()) {
      console.log('fails capital letter check');
      return false;
    }
    if (i === inputArray.length) {
      if (inputArray[i].includes(".") || inputArray) {
        console.log('last word must not be an initial');
        return false;
      }
    }
  }
  return true;
}

console.log(validNameCheck('H. Go Wells'));