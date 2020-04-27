// https://www.codewars.com/kata/5841f680c5c9b092950001ae/train/javascript
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

function generateIntegers(m, n) {
  
  const liczenie = new Array(n - m + 1);

  for (let i = 0; i <= liczenie.length - 1; i++) {
    liczenie[i] = m + i;
  }

  //return liczenie;

  console.log(liczenie);
}

generateIntegers(19, 71);
