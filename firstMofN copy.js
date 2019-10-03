/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  const stringArray = str.split(' ');
  let resultArray = [];
  console.log(stringArray);

    for (let i = 0; i < stringArray.length; i++){
      let el = stringArray[i];
    if (el == '!' || el == '?'){
      resultArray.push(el);
      break;
    }
    let resultWord;
    let firstLetter = el[0];
    if (el.length > 1){
    for (let i = 1; i < el.length; i++){
     
      resultWord += el[i]
    }
  } else{
    resultWord = el
  }
    resultArray.push(resultWord.slice(9) + firstLetter + 'ay');
  }

  return resultArray.join(' ');
}

console.log(pigIt('Pig latin is cool !'));