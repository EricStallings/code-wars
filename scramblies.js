/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

// function scramble(str1, str2) {
//   let canBeScrambled = true;
//   const str1Obj = {};

//   for (let i = 0; i < str1.length; i++){
//     if (!str1Obj[[str1[i]]] ){
//       str1Obj[[str1[i]]] = 1;
//     }
//   }

//   for (let i = 0; i < str2.length; i++){
//     if (!(Object.keys(str1Obj).includes(str2[i]))){
//       canBeScrambled = false;
//     }
//   }

//   return canBeScrambled;
// }

function scramble(str1, str2){
  
  function sortEm(string){
    return string.split('').sort();
  }
  first = sortEm(str1);
  second = sortEm(str2);

  for (let i = 0; i < second.length; i++){
    if (!first.includes(second[i])){
      return false;
    }
  }
  return true;
 
}

console.log(scramble('rkqodlw', 'world')) // True
console.log(scramble('katas', 'steak')) // False