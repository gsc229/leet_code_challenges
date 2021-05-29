const { set1, set2, set3, set4, set5, set6, set7 } = require('./test')
const colors = require('colors')

var areAlmostEqual = function(s1, s2) {
  if(s1 === s2) return true
  
  s2 = s2.split("")
  s1 = s1.split("")
    
  let s1Letter1 = null    
  let s2Letter1 = null
  let s1Letter2 = null
  let s2Letter2 = null

  let iterations = 0
  
  for(let i = 0; i < s1.length; i++){
      iterations++
      if(s1[i] !== s2[i]){
          console.log({s1Letter1, s2Letter1, s1Letter2, s2Letter2})
          if(s1Letter1 && s2Letter1 && s1Letter2 && s2Letter1) return false
          
          if(!s1Letter1 && !s2Letter1){
              s1Letter1 = s1[i]
              s2Letter1 = s2[i]
          }else if(!s1Letter2 && !s2Letter2){
              s1Letter2 = s1[i]
              s2Letter2 = s2[i]
          }
          
      }
      
  }
  
  console.log({s1Letter1, s2Letter1, s1Letter2, s2Letter2, iterations})
  
  if(s1Letter1 !== s2Letter2 || s1Letter2 !== s2Letter1) return false
  
  
  
  
  return true
  
};


let result = areAlmostEqual(set1.a, set1.b)
let correct = result === set1.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set1.a, set1.b], result, answer: set1.answer}, correct)

result = areAlmostEqual(set2.a, set2.b)
correct = result === set2.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set2.a, set2.b], result, answer: set2.answer}, correct)

result = areAlmostEqual(set3.a, set3.b)
correct = result === set3.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set3.a, set3.b], result, answer: set3.answer}, correct)

result = areAlmostEqual(set4.a, set4.b)
correct = result === set4.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set4.a, set4.b], result, answer: set4.answer}, correct)

result = areAlmostEqual(set5.a, set5.b)
correct = result === set5.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set5.a, set5.b], result, answer: set5.answer}, correct) 

result = areAlmostEqual(set6.a, set6.b)
correct = result === set6.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set6.a, set6.b], result, answer: set6.answer}, correct)

result = areAlmostEqual(set7.a, set7.b)
correct = result === set7.answer ? "CORRECT".green : "WRONG".red 
console.log({inputs: [set7.a, set7.b], result, answer: set7.answer}, correct)