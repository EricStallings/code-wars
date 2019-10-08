function generateHashtag (str) {

  if (str === "" || typeof str !== 'string') return false;
  strArr = str.split(" ");
  console.log(strArr)
 
  let result = '#';

  for (let i = 0; i < strArr.length; i ++){

    let newWord = '';

    if (strArr[i] !== ""){

    for (let j = 0; j < strArr[i].length; j++){

      if (j === 0){
        newWord += strArr[i][j].toUpperCase()
      } else {
        newWord += strArr[i][j]
      }
    }
    result+= newWord;
  }

  }
 
  if (result.length <= 140 && result !== '#'){
  return result
  } else {
  return false;
}
}
