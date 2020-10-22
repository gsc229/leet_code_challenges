var removeOuterParentheses = function(S) {

    let countLeft = 0
    let countRight = 0
    let lastBalancedIndex = 0
    let newStr = ""
    
    for(let i = 0; i < S.length; i++){
      console.log({i, countLeft, countRight, newStr, S, length: S.length})

      if(S[i] === "("){
        countLeft += 1
        console.log("S[i] === (")
      }

      if(S[i] === ")"){
        countRight += 1
        console.log("S[i] === )")
      }

      if(countLeft === countRight){
        newStr = newStr + S.slice(lastBalancedIndex + 1, i)
        lastBalancedIndex = i + 1
        //S = S.slice(-(countRight*2 - S.length))
        console.log("countLeft === countRight: ", {countLeft, countRight})
      }

    }

    return newStr
}

const test1 = "(()())(())" // "()()()"

const test2 = "(()())(())(()(()))" // "()()()()(())"

const test3 = "()()" // ""

//console.log("test1 result: ",removeOuterParentheses(test1))
//console.log("test2 result: ",removeOuterParentheses(test2))
console.log("test3 result: ",removeOuterParentheses(test3))
console.log("=========================================================")
//console.log({test1: removeOuterParentheses(test1), test2: removeOuterParentheses(test2), test3: removeOuterParentheses(test3)})