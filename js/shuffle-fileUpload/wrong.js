let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 没有实现真正的乱序 伪随机
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5) // 每次调用回调可能交换也可能不交换，结果不唯一
  return arr
}

let t = 10000
for (let i = 0; i < t; i++) {
  let sorted = shuffle(arr.slice(0))
  sorted.forEach((num, i) => {
    sum[i] = num + sum[i]
  })
}

// console.log(sum.map(n => n / t))
arr.sort((a, b) => a - b) // 升序
arr.sort((a, b) => b - a) // 降序

let arr1 = [1, 2, 5, 4, 6, 3]
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let k =  j + 1
      if (arr[j] > arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubble(arr1))
