/*
This is a simple string decoding algorithm. The idea is to take a string of characters and decode it into an array. Each character is a single element in the result unless a backslash followed by a number is encountered.

When a backslash followed by a number is found, the number indicates how many of the next characters are grouped together as one element.

Example:

'abc\5defghi\2jkl' => ['a', 'b', 'c', 'defgh', 'i', 'jk', 'l']
If the number is larger than the count of remaining character treat it as reading the remaining characters.

If you are reading characters, and you find an escape inside a string, they should be tallied into the string:

'\5ab\3cde' => ['ab\3c', 'd', 'e'] 
*/

function decode(str) {
  const result = [];
 

  return result;
}
let string = '\5ab\3cde'
console.log(string.split(''));