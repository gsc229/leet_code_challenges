const { set1, set2, set3, set4, set5, set6, set7 } = require('./test')
const colors = require('colors')


var buddyStrings = function(a, b) {
  if(a.length !== b.length) return false
  if(a.length <= 1) return false
  
  
  b = b.split("")
  
  for(let i = 0; i < a.length; i++){
      
      for(let j = i + 1; j < a.length; j++){
          const first = b[i]
          const second = b[j]
          b[i] = second
          b[j] = first
          
          if(a === b.join("")){
              return true
          } else {
              b[i] = first
              b[j] = second
          }
      }
      
      
  }
  
  return false
  
  
  
};


let result = buddyStrings(set1.a, set1.b)
let correct = result === set1.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set1.a, set1.b], result, answer: set1.answer}, correct)

result = buddyStrings(set2.a, set2.b)
correct = result === set2.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set2.a, set2.b], result, answer: set2.answer}, correct)

result = buddyStrings(set3.a, set3.b)
correct = result === set3.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set3.a, set3.b], result, answer: set3.answer}, correct)

result = buddyStrings(set4.a, set4.b)
correct = result === set4.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set4.a, set4.b], result, answer: set4.answer}, correct)

result = buddyStrings(set5.a, set5.b)
correct = result === set5.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set5.a, set5.b], result, answer: set5.answer}, correct) 

result = buddyStrings(set6.a, set6.b)
correct = result === set6.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set6.a, set6.b], result, answer: set6.answer}, correct)

result = buddyStrings(set7.a, set7.b)
correct = result === set7.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set7.a, set7.b], result, answer: set7.answer}, correct)




