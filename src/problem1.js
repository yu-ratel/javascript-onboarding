function problem1(pobi, crong) {
  var answer;
  
  return answer;
}

module.exports = problem1;

function add(number){
  return number.toString().split('').reduce((a,b)=>Number(a)+Number(b));
}

function multiply(number){
  return number.toString().split('').reduce((a,b)=>Number(a)*Number(b));
}

function bigNumbers(person){
  return Math.max(...person.map((el)=>{
      return Math.max(add(el),multiply(el))
  }));
}