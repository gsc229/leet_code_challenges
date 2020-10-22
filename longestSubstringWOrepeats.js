var lengthOfLongestSubstring = function(s) {
  
  let subStrConstructor = ""
  let lengthOfLongestSubstr = 0

  for(let i = 0; i < s.length; i++){

    const letterIsInSubStr = subStrConstructor.indexOf(s[i])
    if(letterIsInSubStr !== -1){
      // update the longest length if necessary
      lengthOfLongestSubstr = subStrConstructor.length > lengthOfLongestSubstr ? subStrConstructor.length : lengthOfLongestSubstr
      // remove all parts of the substring up until the first matched letter
      subStrConstructor = subStrConstructor.slice(subStrConstructor.indexOf(s[i]) + 1)
    }
    subStrConstructor = subStrConstructor + s[i]
  }

  
  lengthOfLongestSubstr = subStrConstructor.length > lengthOfLongestSubstr ? subStrConstructor.length : lengthOfLongestSubstr

  return lengthOfLongestSubstr
 
};


const test1 = "pwwkew"
const test2 = "dvdf"
const test3 = "dvxqwtzdabcefghi"
const test4 = "lmnodvxqwtzdabcefghi"

console.log(lengthOfLongestSubstring(test2))

