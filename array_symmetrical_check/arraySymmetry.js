'use strict';

function symmetryCheck(arrayInput) {
  let horizontalSymmetry = true;
  let verticalSymmetry = true;

  for (let i = 0; i < arrayInput.length; i++) {


    for (let j = 0; j < arrayInput[i].length; j++) {
      if (arrayInput[i][j] !== arrayInput[arrayInput[i].length - i - 1][j]) {
        horizontalSymmetry = false;
      }

      if (arrayInput[i][j] !== arrayInput[i][arrayInput[i].length - j - 1]) {
        verticalSymmetry = false;
      }
    }
  }

  if (horizontalSymmetry && !verticalSymmetry) {
    return 'horizontally symmetrical';
  }
  else if (!horizontalSymmetry && verticalSymmetry) {
    return 'vertically symmetrical';
  }
  else if (horizontalSymmetry && verticalSymmetry) {
    return 'fully symmetrical';
  }
  else {
    return 'not symmetrical';
  }

}

let arrayInput = [
  ['a', 'b', 'b', 'a'],
  ['b', 'b', 'b', 'b'],
  ['a', 'b', 'b', 'a']
];
console.log(symmetryCheck(arrayInput));
