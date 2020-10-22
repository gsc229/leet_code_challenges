var lengthOfLongestSubstring = function(s) {
    
  let longestLength = 0
  let substr = ""
  let lastRepeatIndex = 0
  
  for(let i = 0; i < s.length; i++){
      console.log({substr},'current letter: ', s[i])
      if(substr.includes(s[i])){
          console.log(`includes: ${s[i]}`, {substr, i})
          const newSubstr = s.slice(i)
          substr = substr.length > newSubstr.length ? substr : newSubstr
          console.log({newSubstr})
      } else{
          substr = substr + s[i]
      }
  }
  console.log("final", {substr})
  return substr.length
};


const test1 = "pwwkew"
const test2 = "dvdf"
const test3 = "dvxqwtzdabcefghi"
const test4 = "lmnodvxqwtzdabcefghi"

console.log(lengthOfLongestSubstring(test1))