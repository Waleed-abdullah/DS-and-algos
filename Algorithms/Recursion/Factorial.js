// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //O(n)
  if (number === 2) return number;
  if (number < 2) return 1;

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //O(n)
  if (number === 0 || number === 1) {
    return 1;
  }

  for (let i = number - 1; i > 1; i--) {
    number *= i;
  }

  return number;
}
findFactorialIterative(5);
findFactorialRecursive(5);
