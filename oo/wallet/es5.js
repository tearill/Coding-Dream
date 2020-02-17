// Wallet 类 -> ES5
// _id 只是一个约定(编程风格，eslint)
// 真正实现私有化
// 面向对象 private 是外界不能访问，但是内部可以访问
var UUID = require('uuid');
var Wallet = (function () {
    var id, createTime, balance, balanceLastModifiedTime; // 私有属性 外界只能通过闭包提供的方法来访问
    // 读取闭合空间的数据
    return function () { // 闭包
        // 初始化操作
        id = UUID.v1().replace(/-/g, "");
        createTime = + new Date();
        balance = 0;
        balanceLastModifiedTime = + new Date();

        // 私有方法
        function checkAmount(amount) {
            if (isNaN(amount)) {
                return false;
            }
            return true;
        }

        // 通过 return 给外界提供接口访问
        return { // public
            desc: '钱包',
            getId: function () {
                return id;
            },
            getCreateTime: function () {
                return createTime;
            },
            getBalanceLastModifiedTime: function () {
                return balanceLastModifiedTime;
            },
            getBalance: function () {
                return balance;
            },
            increaseBalance: function (amount) {
                if (!checkAmount(amount)) {
                    throw new Error('发生错误');
                }
                balance += amount;
                balanceLastModifiedTime = + new Date();
            },
            decreaseBalance: function (amount) {
                
                balance -= amount;
                balanceLastModifiedTime = + new Date();
            }
        }
    }
})()

var hyWallet = new Wallet();
console.log(hyWallet.getId());
// 利用闭包创建类，闭包的升级