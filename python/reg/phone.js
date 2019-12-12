const phoneReg = /^1[356789]\d{9}$/; // 匹配规则定义 正则表达式
console.log(phoneReg.test('13279041222'));
console.log(typeof phoneReg);

const string = /00[78]/;
console.log(string.test('008'));

console.log(/^\d{3}-\d{5,8}$/.test('010-123456'));