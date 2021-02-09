var convert = function(s, numRows) {
  if(s.length === 1 || numRows === 1) return s
  const rows = []
  for(let i = 0; i < numRows; i++){
    rows[i] = []
  }
  console.log(rows)
  let zigOrZag = 'zigging' // zigging = ↓ zagging = ↑
  let currentRow = 0 

  while(s.length >= 1){
    console.log({rows})
    if(zigOrZag === 'zigging'){
      console.log({s, currentRow, zigOrZag})
      if(currentRow < numRows){
        rows[currentRow].push(s[0])
        s = s.slice(1, s.length)
        currentRow ++ 
      } else{
        console.log('ZAG')
        currentRow = currentRow - 2
        zigOrZag = 'zagging'
      }
    }

    if(zigOrZag === 'zagging'){
      console.log({s, currentRow, zigOrZag})
      if(currentRow > 0){
        rows[currentRow].push(s[0])
        s = s.slice(1, s.length)
        currentRow --
      } else{
        console.log('ZIG')
        zigOrZag = 'zigging'
      }
    }

  }

  console.log(rows)
  return rows.flat().join("")
};

/* const numRows = 2
const s = 'PAY' */

/* const numRows = 1
const s = 'PAYPALISHIRING' */

/* const numRows = 3
const s = 'PAYPALISHIRING'
const answer = "PAHNAPLSIIGYIR" */

/* const  numRows = 4
const  s = 'PAYPALISHIRING' */

/* const  numRows = 1
const  s = 'A' */

const s = 
"Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers."
const numRows = 2
const answer = 
"Aaidoeswr,haenme,rtesqecouishtabrateaeaietedrcinwtgnrlloacsoajsmnsoucutoadodiiesplnrmiaodprs,ubroohreunefnttacneedhsmwynihrieto,iheeaalwnefrdutettpntainnwrdvdr."

console.log({s, answer, conver: convert(s, numRows)}, convert(s, numRows) === answer)