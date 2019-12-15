/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a = [];
    for (var i = 0, numsLen = nums.length; i < numsLen; i++) {
        var diff = target - nums[i];
        if(a[diff] !== undefined) return [a[diff], i];
        a[nums[i]] = i;
    }
}; 
console.log(twoSum([2, 7, 11, 15], 9));