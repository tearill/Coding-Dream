/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0, numsLen = nums.length; i < numsLen; i++){
        if(map.hasOwnProperty(target - nums[i])){
            return [map[target - nums[i]],i];
           }
        map[nums[i]] = i;
    }
}; 
console.log(twoSum([2, 7, 11, 15], 9));