/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets(peopleInLine){
 
  let answer = 'YES';

  let moneyObj = {
    25: 0,
    50: 0,
    100: 0
  }

  peopleInLine.forEach((el)=>{
    if (el === 25){
      moneyObj[el] += 1;
    } else if (el === 50){
      if (moneyObj[25] > 0){
        moneyObj[25] -= 1;
        moneyObj[50] += 1;
      } else {
        answer = 'NO'
      }
    } else if (el === 100){
      if ((moneyObj[50] > 0 && moneyObj[25] > 0)){
        moneyObj[100] += 1;
        moneyObj[50] -= 1;
        moneyObj[25] -= 1;
      } else if (moneyObj[25] >= 3){
        moneyObj[25] = moneyObj[25] - 3;
        moneyObj[100] += 1;
      } else {
        answer = 'NO'
      }

    }
  }
  )
  
return answer;


}
console.log(tickets([25, 25, 50])) // => Yes
console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars

/* First Attempt 
for (let i = 0; i < peopleInLine.length; i++){
    if (peopleInLine[i] === 25){
      currentTotal.push(1)
    } else if (peopleInLine[i] === 50){
      if (currentTotal.length >= 2){
        currentTotal.pop();
        currentTotal.pop();
      } else {
        return 'NO';
      }
    } else if (peopleInLine[i] === 100){
      if (currentTotal.length >= 4){
        currentTotal.pop();
        currentTotal.pop();
        currentTotal.pop();
        currentTotal.pop();
      } else {
        return 'NO';
      }
    }
  }
*/