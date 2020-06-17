const arr = [15, 6, 12, 13, 16];
// Math.max(...arr);
const max = Math.max.call(Math, ...arr);

console.log(max);