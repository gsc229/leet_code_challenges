const set1 = {
  a : "ab", b : "ba",
  answer: true
}


const set2 = {
  a : "ab", b : "ab",
  answer: false
}

const set3 = {
  a : "aa", b : "aa",
  answer: true
}

const set4 = {
  a : "aaaaaaabc", b : "aaaaaaacb",
  answer: true
}


const set5 = {
  a: "abab", b: "abab",
  answer: true
}

const set6 = {
  a:"abcd", b:"abcd",
  answer: false
}


module.exports = { set1, set2, set3, set4, set5, set6 }