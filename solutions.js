// Sum of Two Numbers
function sum(a, b) {
// Add your code here
if (typeof a !== 'number' || typeof b !== 'number') {
  console.log('Los datos de entrada no son adecuados');
}
return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof numero !== 'number' || isNaN(numero)) {
    console.log( 'Los datos de entrada no son adecuados');
}

let factorial=0;
if (n=0)
{
  factorial=1;
}
else{
  for (let i=1; i<=n; i++ )
  {
    factorial*=i;
  }
}

return factorial;

}


// Find the Largest Number
function findLargest(arr) {
let largest = arr[0]; 
if (arr.length === 0 || arr.some(isNaN)) {
  console.log('Los datos de entrada no son adecuados');
}

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

return findLargest;
}


// Count Vowels in a String
function countVowels(str) {

    if (!isNaN(palabra)) {
        return 'Los datos de entrada no son adecuados';
    }

    palabra = palabra.toLowerCase();

    const vocales = ['a', 'e', 'i', 'o', 'u'];

    let contadorVocales = 0;

    for (let letra of palabra) {

        if (vocales.includes(letra)) {
            contadorVocales++;
        }
    }

    return countVowels;
}


// Check if a Number is Prime
function isPrime(n) {
  // Add your code here

  if (isNaN(numero) || typeof numero !== 'number') {
    return 'Los datos de entrada no son adecuados';
}


if (numero <= 1) {
    return false;
}


for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        return false;
    }
}

return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
