var longestPalindrome = function(s) {
    
  if(s.length = 1){
      return s
  }
  
  let highest = ""
  let current = ""
  
  const reversed = s.split("").reverse().join("")
  
  for(let i = 0; i < s.length; i++){
      if(s[i] === reversed[i]){
          current = current + s[i]
      } else {
          highest = current.length > highest.length ? current : highest
          current = ""
      }
      console.log(s)
      console.log(s.split("").reverse().join(""))
  }
  
  return highest
  
  
};

const test1 = "babad"



console.log(longestPalindrome(test1))