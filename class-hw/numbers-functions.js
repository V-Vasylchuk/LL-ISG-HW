'use strict';

const NUMBER = 97;

function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(`Число ${NUMBER} просте? ${isPrime(NUMBER)}`);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(`Факторіал числа ${NUMBER} дорівнює ${factorial(NUMBER)}`);
