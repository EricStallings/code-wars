/*
-Binary Addition-
Difficulty: Easy 

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

function addBinary(a,b) {

    console.log(((a+b) >>> 0))
    return ((a+b) >>> 0).toString(2);

}

console.log(addBinary(10,10))