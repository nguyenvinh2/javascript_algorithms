'use strict';

function validNameCheck(inputName) {
  let inputArray = inputName.split(' ');
  if (inputArray.length <2) {
    return false;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].includes('.') && inputArray[i].length > 2) {
      return false;
    }
    if (inputArray[0].length < 3 && inputArray[0].includes('.')) {
      if (i !== 0 && i !== inputArray.length - 1 && (inputArray[i].length > 2 || !inputArray[i].includes('.')) ) {
        return false;
      }
    }
    if (inputArray[i][0] !== inputArray[i][0].toUpperCase()) {
      return false;
    }
    if (i === inputArray.length - 1) {
      if (inputArray[i].includes('.') || inputArray[i].length<2) {
        return false;
      }
    }
  }
  return true;
}

console.log(validNameCheck('H. Gree Wells'));
