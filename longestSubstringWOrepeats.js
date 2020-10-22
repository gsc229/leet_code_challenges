var lengthOfLongestSubstring = function(s) {
  
  let subStrConstructor = ""
  let subStrStack = []
  let lengthOfLongestSubstr = 0

  for(let i = 0; i < s.length; i++){

    const letterIsInSubStr = subStrConstructor.indexOf(s[i])
    if(letterIsInSubStr !== -1){
      // push the substring onto the stack
      subStrStack.push(subStrConstructor)
      // remove all parts of the substring up until the first matched letter
      subStrConstructor = subStrConstructor.slice(subStrConstructor.indexOf(s[i]) + 1)
      

    }
    subStrConstructor = subStrConstructor + s[i]
  }

  if(subStrConstructor.length){
    subStrStack.push(subStrConstructor)
  }
  for(substr of subStrStack){
    if(substr.length > lengthOfLongestSubstr){
      lengthOfLongestSubstr = substr.length
    }
  }


  return lengthOfLongestSubstr
 
};


const test1 = "pwwkew"
const test2 = "dvdf"
const test3 = "dvxqwtzdabcefghi"
const test4 = "lmnodvxqwtzdabcefghi"

console.log(lengthOfLongestSubstring(test3))

