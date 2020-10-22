/* const rotateString = (A, B) => {

  if(A===B){
    return true
  }

  const splitA = A.split("")

  let counter = 0

  while(counter < splitA.length){
    
    splitA.push(splitA[0])
    splitA.shift()
    if(splitA.join("") === B){
      return true
    }
    counter+=1
  }

  return false

} */

const rotateString = (A, B) => {
  B = B+B
  console.log(B)
  return B.includes(A)

}

const str1 = 'abcde'
const str2 = 'cdeab'

const str3 = 'abcde'
const str4 = 'abced'

console.log(rotateString(str1, str2))
console.log(rotateString(str3, str4))