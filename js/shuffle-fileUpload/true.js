let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 9: 和未洗牌区间，0 ~ 9 选择一个随机数 交换
// 8: 和未洗牌区间，0 ~ 8 选择一个随机数 交换
// ...
// 0
// 每个数都参与交换
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    console.log(Math.random() * (len - 1));
    let randomIndex = Math.floor(Math.random() * (len - i)); // 随机区间
    // 从后往前选的最后一个数
    [arr[len - i - 1], arr[randomIndex]] = [arr[randomIndex], arr[len - i - 1]];
  }
  return arr;
}

console.log(shuffle(arr))
