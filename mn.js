// https://www.codewars.com/kata/5841f680c5c9b092950001ae/train/javascript
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

function generateIntegers(m, n) {
  const liczenie = [];
  while (m <= n) {
    liczenie.push(m);
    m++;
  }
  console.log(liczenie);
  //return liczenie;
}

generateIntegers(19, 24);
