/* 
-Remove Duplicate Words-
Difficulty: Easy

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

For Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {

    const wordArray = s.split(' ');
    const resultArray = [];

    for (let i = 0; i < wordArray.length; i++){
        if (!resultArray[i].includes(wordArray[i])){
            resultArray.push(wordArray[i]);
        }
    }

    return resultArray.join(' ');

}