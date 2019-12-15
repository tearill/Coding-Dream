/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [],
        res = [];
    for(var i = 0, len = nums.length; i<len-2; i++) {
        for(var j = i+1, len = nums.length; j<len-1; j++) {
            for(var k = j+1, len = nums.length; k<len; k++) {
                if(nums[i] + nums[j] + nums[k] === 0)
                    result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }        
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));