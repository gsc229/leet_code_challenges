var checkIfExist = function(arr) {
    
  const dict = {}
  
  arr.forEach((num, i) => dict[num * 2] = i)
  
  for(let i = 0; i < arr.length; i++){
      
      if(dict[`${arr[i]}`] >= 0 && arr[i] !== 0){
          return true
      } else if(dict[`${arr[i]}`] && dict[`${arr[i]}`] !== i){
          return true
      }
      
  }
  
  return false
  
};