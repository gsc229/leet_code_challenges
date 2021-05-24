const { set1, set2, set3, set4, set5, set6 } = require('./test')

const expandFromCenter = (s, left, right) => {
    if(!s || left > right) return 0

    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }

    return right - left - 1
}

var longestPalindrome = function(s) {

    let start = 0
    let end = 0
    
    for(let i = 0; i < s.length; i++){
        const length1 = expandFromCenter(s, i, i)
        const length2 = expandFromCenter(s, i, i + 1)

        const length = Math.max(length1, length2)

        if(length > end - start){
            start = Math.ceil(i - (length - 1) / 2)
            end = Math.floor(i + length / 2)
        }

    }

    console.log({start, end})
    return s.slice(start, end + 1)
    

};



const result = longestPalindrome(set2.s)

console.log({input: set2.s, result, answer: set2.answer, correct: set2.answer === result})