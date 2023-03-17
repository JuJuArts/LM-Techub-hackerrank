const ar = [1, 2, 3, 4, 10, 11];
const ar1 = [1, 2, 10, 11];
const ar2 = [1, 2, 3, 4, 10];
const ar3 = [1, 2];

//A new branch
// function simpleArraySumMercy(ar) {
//   let res = ar.reduce((a, b) => {
//     return a + b;
//   });

//   return res;
// }

// aniche joel - Using For Loop
// function simpleArraySumAnichejoel(ar) {
//   let result = 0;
//   for (let i = 0; i < ar.length; i++) {
//     result = result + ar[i];
//   }
//   return result
// }

//Nworahs forEach method

function simpleArraySumNworah(ar) {
  let result = 0;
  ar.forEach(function (el) {
    result = result + el;
  });
  return result;
}

// console.log(simpleArraySumMercy(ar), "Promise");
// console.log(simpleArraySumMercy(ar1), "Chibuike");
// console.log(simpleArraySumMercy(ar2), "Joel");
// console.log(simpleArraySumMercy(ar3), "Mercy");

// console.log(simpleArraySumAnichejoel(ar));
// console.log(simpleArraySumAnichejoel(ar1));
// console.log(simpleArraySumAnichejoel(ar2));
// console.log(simpleArraySumAnichejoel(ar3));

console.log(simpleArraySumNworah(ar))
console.log(simpleArraySumNworah(ar1))
console.log(simpleArraySumNworah(ar2))
console.log(simpleArraySumNworah(ar3))