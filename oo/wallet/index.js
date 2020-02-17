const UUID = require('uuid') // uuid 生成唯一的 ID

// 钱包类
class Wallet {
    constructor() {
        // id生成后不能被改变 private
        this._id = UUID.v1().replace(/-/g, ""); // uuid 返回用户 id -> 唯一的，加密生成的，后端开发中 id 生成的技能项
        this._createTime = + new Date(); // 时间前面加一个 + 获取时间微秒 --- 整型方便存储
        this._balance = 0; // 金额初始值
        this._balanceLastModifiedTime = +new Date(); // 金额上一次修改时间
        // console.log(this.id);
        // console.log(this._createTime)
    }
    getId() {
        return this._id;
    }
    getBalance() {
        return this._balance;
    }
    getCreateTime() {
        return this._createTime;
    }
    getBalanceLastModifiedTime() {
        return this._balanceLastModifiedTime;
    }
    increaseBalance(increasedAmount) { // 余额增加
        // 先去检查 increasedAmount 是不是正确的钱数量
        // 封装
        if (increasedAmount < 0) {
            throw new Error('错误的金额');
        }
        this._balance += increasedAmount;
        this._balanceLastModifiedTime = + new Date();
    }
    // 花钱
    decreaseBalance(decreasedAmount) {
        if (decreasedAmount > this._balance) { // 可以花
            throw new Error('没有足够的钱');
        }
        this._balance -= decreasedAmount;
        this._balanceLastModifiedTime = + new Date();
    }
}
// 1. 每个人都钱包，要有一个不可变的 id，一串数字

// 类的使用
const jayWallet = new Wallet();

// console.log(jayWallet.getId()); 

// 收到红包
jayWallet.increaseBalance(20);
console.log(jayWallet.getBalance());
console.log(jayWallet.getBalanceLastModifiedTime());

jayWallet.decreaseBalance(10);
console.log(jayWallet.getBalance());
jayWallet._id = 'aaa';
console.log(jayWallet.getId());
// console.log(jayWallet.decreaseBalance(200));