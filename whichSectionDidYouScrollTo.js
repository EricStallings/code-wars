/*
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
getSectionIdFromScroll( 300, [300,200,400,600,100] )

will output number 1 as it's the second section.

getSectionIdFromScroll( 1600, [300,200,400,600,100] )

will output number -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
*/

// The idea here is to iterate over the given array, adding each element together until you reach a sum that is greater than but not equal to the input number. Then, return the zero-indexed position in the array that contained the last number to be added. 

function getSectionIdFromScroll(scrollY,sizes){
  let total = 0; 
  let index = 0;
  if (scrollY === 0){
      index = -1;
  } else {

  for (let i = 0; i < sizes.length; i++){
      if (!(total > scrollY)){
          total += sizes[i];
          index = i;
      } 
  }
  if (total === scrollY || total < scrollY){
      index = -1;
  }
}

  return index; 
}

console.log(getSectionIdFromScroll(300, [300,200,400,600,100]))
console.log(getSectionIdFromScroll(1600, [300,200,400,600,100]))