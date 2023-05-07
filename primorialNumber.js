//In mathematics, primorial, denoted by “#”, is a function from natural numbers to natural numbers similar to the factorial
// function, but rather than successively multiplying positive integers, the function only multiplies prime numbers.
//Examples:
//primorial(1) ➞ 2
// First prime number = 2

//primorial(2) ➞ 6
// Product of first two prime numbers = 2*3 = 6

//primorial(6) ➞ 30030


let prime_number_array = [];
let count = 0;
let i, j;
for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }
  if (count == 2) {
    prime_number_array.push(j);
  }
  count = 0;
}

function primorial(n) {
  let total = 1;
  for (let i = 0; i < n; i++) {
    total *= prime_number_array[i];
  }
  return total;
}
