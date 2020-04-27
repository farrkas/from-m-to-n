// https://www.codewars.com/kata/5841f680c5c9b092950001ae/train/javascript
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

function generateIntegers(m, n) {
  const mm = Math.ceil(m);
  const nn = Math.ceil(n);
  //const dlugoscTablicy=nn-mm;
  const liczenie = new Array(nn - mm + 1);
  liczenie[0] = mm;
  liczenie[liczenie.length - 1] = nn;

  for (let i = 0; i <= liczenie.length - 1; i++) {
    liczenie[i] = mm + i;
  }

  //return liczenie;
  console.log(mm);
  console.log(nn);
  console.log(liczenie);
}

generateIntegers(19.7, 71.9);
