const { set1, set2, set3, set4, set5 } = require('./test')

var longestPalindrome = function(s) {
    
    if(s === s.split("").reverse().join("")) return s
    
    const size = s.length
    let left = 0
    let right = 0
    let longest = ""
    console.log({s})
    
    while(left < size - 1 && right < size){        
        const slice = s.slice(left, right + 1)
        const reversed = slice.split("").reverse().join("")
        
        if(reversed === slice){
            if(right - left >= longest.length){
                longest = slice
            }
            console.log({slice, reversed, longest, left, right})
            right++
        } else if(right === size - 1){
            left++
            right = left
        } else {
            right++
        }
    
        
    }
  
  console.log({longest})
  return longest

};



const result = longestPalindrome(set5.s)

console.log({result, answer: set5.answer, correct: set5.answer === result})