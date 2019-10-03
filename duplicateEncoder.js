/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){

  // 1. toLowercase() the input word
  // 2. create a store 
  // 3. iterate over input word 
    // if the individual character isn't in the object, store it
    // if it is, mark the value from false to true 

  // 4. declare a new string.   
  // 5. iterate over the input string again- this time, checking against the store. If the value of that string is false, concat '(' otherwise concat ')'.
  // 6. return the new result string. 

  let originalWord = word.toLowerCase();
  let dupeObj = {};

  for (let i = 0; i < originalWord.length; i++){
    if (dupeObj[originalWord[i]] === undefined){
      dupeObj[originalWord[i]] = false;
    } else {
      dupeObj[originalWord[i]] = true;
    }
  };
  console.log(dupeObj);
  let newWord = '';

  for (let i = 0; i < originalWord.length; i++){
    if (dupeObj[originalWord[i]] == false){
      newWord += '(';
    } else {
      newWord+= ')';
    };
  }

  return newWord;

}

// console.log(duplicateEncode("din"))      // "((("
// console.log(duplicateEncode("recede"))   //  "()()()"
console.log(duplicateEncode("Success"))  //  ")())())"
console.log(duplicateEncode("(( @"))     //  "))((" 