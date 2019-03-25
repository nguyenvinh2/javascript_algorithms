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
    if (inputArray[0].length < 3 && inputArray[0].includes('.')) {
      if (i !== 0 && i !== inputArray.length - 1 && (inputArray[i].length > 2 || !inputArray[i].includes('.')) ) {
        console.log('what does this fail?' + ' ' + i + ' ' +inputArray[i].length);
        return false;
      }
    }
    if (inputArray[i][0] !== inputArray[i][0].toUpperCase()) {
      console.log('fails capital letter check');
      return false;
    }
    if (i === inputArray.length - 1) {
      if (inputArray[i].includes(".") || inputArray[i].length<2) {
        console.log('last word must not be an initial');
        return false;
      }
    }
  }
  return true;
}

console.log(validNameCheck('H. Gree Wells'));