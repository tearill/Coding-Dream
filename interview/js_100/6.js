// MVVM 数据劫持

// var arr = [1];
// arr[10000] = 1;
// 数组容器，数字索引，字符串索引
// function a() {
//   console.time();
//   for (let i = 0; i < arr.length; i++) {
//     console.log(1)
//   }
//   console.timeEnd();
// }

// a();

// function b() {
//   console.time();
//   arr.forEach(item => console.log(2)); // 循环 key
//   console.timeEnd();
// }

// b();

var arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
  // 对每一个属性单独的进行数据劫持，
  Object.defineProperty(arr, index, {
    set: function(val) {
      console.log('set');
      item = val;
    },
    get: function(val) {
      console.log('get');
      return item;
    }
  })
})

// defineProperty 可以对数组进行数据劫持，但是对新增的数据项没有效果
arr[1];
arr[1] = 1;
// arr[5] = 2;
// arr[1000] = 1000;
arr.push(5);
// 1. 尝试让 Vue 支持数组的