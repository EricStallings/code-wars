/**
 * 
 * Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5)
should return

vec![5, 10, 15]
 * 
 */

function multiples (m, n){

    const resultArray = [];

    for (let i = 1; i <=m; i++){
        resultArray.push(n*m)
    }

    return resultArray;
}

/*
Other solutions: 
function multiples(m, n){
  return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

*/ 