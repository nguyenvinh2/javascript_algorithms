'use strict';

function pigLatin(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = [];
  let sliceWord = [];
  let endWord = 'ay';
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      result.push(word[i]);
    }
    else {
      sliceWord = word.slice(i);
      break;
    }
  }
  return sliceWord.concat('', result.join('')).concat('', endWord);
}
console.log(pigLatin('lovelace'));
