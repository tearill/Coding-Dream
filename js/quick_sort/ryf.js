const arr = [0, 1, 9, 8, 4]

// 1. pivot 找到正确的位置
// 2. 左边小于 pivot 的数 < pivot < 右边 大于 pivot 的数
const quickSort = function(arr) {
  if (arr.length <= 1) return arr
  let pivot = arr[0]
  let left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    if (arr[i] > pivot) right.push(arr[i])
  }
  return [...(quickSort(left)), pivot, ...(quickSort(right))]
}

console.log(quickSort(arr))