//Implement a function that reverses a string using iteration...and then recursion!
const reverseStringIterative = (str) => str.split('').reverse().join('');

const reverseStringRecursive = (str) => {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
};

reverseStringRecursive('yoyo mastery');
//should return: 'yretsam oyoy'
