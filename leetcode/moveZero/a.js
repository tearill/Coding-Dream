var moveZero = function (nums) {
    // 定义一个慢指针
        let index = 0;
        for (let i = 0; i< nums.length; i++) {
            let num = nums[i]; //当前的每个值
            // 如果是0  index 不增加， 它就比i慢
            // 如果不是0 留在nums数组中, index 做为下标， 之后index++
            if (num != 0) {
                nums[index++] = num;
                // index++ 先赋值再自增;
            }
            // 0 length-index
            // index为非零元素的个数
        }
        for (let i = index; i < nums.length; i++) {
            nums[index++] = 0;
        } 
        // return nums;
    }
    // console.log(moveZeroes([0,1,0,3,12]));

    const nums = [0, 1, 0, 3, 12]; //Object
    moveZero(nums); //内部整了nums时 引用式赋值
    console.log(nums);
