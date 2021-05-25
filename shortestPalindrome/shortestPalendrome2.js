const { set1, set2, set3 } = require('./test')

var shortestPalindrome = function(s) {

    const size = s.length
    const isOdd = size%2 !== 0
    const middle = Math.ceil(size / 2) - 1

    let left = s.slice(0, middle + 1)
    let right = s.slice(middle + 1, size)

    let leftRevese = left.split("").reverse().join("")
    let rightRevese = right.split("").reverse().join("")

    if(left === rightRevese) return s

    console.log({s, size, middle, isOdd, left, right, leftRevese, rightRevese})

    if(isOdd) return rightRevese + leftRevese + s
    if(!isOdd) return rightRevese + leftRevese.slice(0, leftRevese.length - 1) + s
    
};

const result = shortestPalindrome(set1.s)

console.log({input: set1.s, result, answer: set1.answer, correct: set1.answer === result})
