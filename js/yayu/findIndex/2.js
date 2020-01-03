/**
 * 
 * @param {*} array 
 * @param {*} predicate 用户自定义函数
 * @param {*} context 
 */
'use strict'
// 返回符合条件的元素下标，如果没找到返回-1
function findIndex(array, predicate, context) {
    for(let i = 0, len = array.length; i < len; i++) {
        // 函数运行时要考虑上下文环境
        if(predicate.call(context, array[i], i)) {
            return i;
        }
    }
    return -1;
}
// 函数可以作为参数 JS里函数是一等对象
// item 查找的值 i 返回下标
console.log(findIndex([1, 2, 3, 4], function(item, i) {
    // console.log(this);
    if(item == 3) return true;
}, [1, 2, 3, 4]));