const { set1, set2, set3 } = require('./test')

var shortestPalindrome = function(s) {
    
  s = s.split("")
    
    
    
    let left = 0
    let right = s.length - 1
    
    
    while(left <= right + 1){
        
        if(s[left] !== s[right]){
            s.splice(left, 0, s[right])
            
            left++
            
        } else{
            left++
            right--
        }
        
    }
    
    return s.join("")
  
};

const result = shortestPalindrome(set1.s)

console.log({result, answer: set1.answer, correct: set1.answer === result})

