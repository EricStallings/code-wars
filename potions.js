// Create a function "addOne" that takes a number as and argument and returns that number plus one

const addOne = num => num + 1;

// Create a function "subtractOne" that takes a number as and argument and returns that number minus one

const subtractOne = num => num - 1 ;

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit. using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

function usePotions(str){
  let strArray = str.split('');

  for (let i = 0; i < strArray.length; i++){
    if (strArray[i] === 'A'){
      strArray[i-1] = addOne(parseInt(strArray[i-1]))
      strArray.splice(i, 1);
    } else if (strArray[i] === 'B'){
      strArray[i-1] = subtractOne(parseInt(strArray[i-1]))
      strArray.splice(i, 1);
    }
  }
  return strArray.join('');
}

const myString = "3A78B51";
console.log(usePotions(myString)) //=> "47751"

console.log(usePotions("9999B")) // "9998"
console.log(usePotions("9A123")) // "10123"
console.log(usePotions("567")) // "567"