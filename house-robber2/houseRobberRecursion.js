/**
 * @param {number[]} nums
 * @return {number}
 */


let calls = 0
const rob = function(nums, i=0, memo={}) {
    calls += 1
    if(nums[i] === 100) console.log(100)
    if(i >= nums.length) return 0

    if(memo[i]) return memo[i]

    const answer = Math.max(rob(nums, i+1, memo), rob(nums, i+2, memo) + nums[i])
    
    memo[i] = answer
    return answer

};

const nums0 = [1,3,1,3,100, 1, 1, 3, 4, 5, 5, 5, 5, 5, 6, 7, 22, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1]
const answer0 = 104
const test0 = rob(nums0)
console.log({calls, 0: {test0, answer0, pass: test0 === answer0}})
calls = 0
/* const nums1 = [1,3,1,3,100]
const answer1 = 103
const test1 = rob(nums1)
console.log({calls, 1: {test1, answer1, pass: test1 === answer1}})
calls = 0
const nums2 = [1,1]
const answer2 = 1
const test2 = rob(nums2)
console.log({calls, 2: {test2, answer2, pass: test2 === answer2}})
calls = 0
const nums3 = [1,2,3,1]
const answer3 = 4
const test3 = rob(nums3)
console.log({calls, 3: {test3, answer3, pass: test3 === answer3}})
calls = 0 */
