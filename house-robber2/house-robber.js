/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function(nums) {
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return Math.max(nums[0], nums[1])

  const totals = new Array(nums.length)
  
  totals[0] = nums[0]
  totals[1] = Math.max(nums[0], nums[1])

  for(let i = 2; i < nums.length; i++){
    totals[i] = Math.max(nums[i] + totals[i - 2], totals[i - 1])
  }

  return totals[totals.length - 1]
};


 
/* [1,3,1,3,100, 1, 1] */



const nums0 = [1,3,1,3,100, 1, 1]
const answer0 = 104
const test0 = rob(nums0)


const nums1 = [1,3,1,3,100]
const answer1 = 103
const test1 = rob(nums1)

const nums2 = [1,1]
const answer2 = 1
const test2 = rob(nums2)

const nums3 = [1,2,3,1]
const answer3 = 4
const test3 = rob(nums3)

console.log({0: {test0, answer0, pass: test0 === answer0},1: {test1, answer1, pass: test1 === answer1}, 2: {test2, answer2, pass: test2 === answer2}, 3: {test3, answer3, pass: test3 === answer3}})




/* Casses */
/* 
Input:
[1,3,1,3,100]
Output:
6
Expected:
103

======================

Input:
[1,1]
Output:
0
Expected:
1

====================

Input:
[1,2]
Output:
1
Expected:
2

=====================

Input:
[1,2,3,1]
Output:
3
Expected:
4

*/