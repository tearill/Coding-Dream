function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 覆盖了Objec上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a Person, my name is ' + this.name;
}
// var person = new Person('Horace', 19);
// console.log(person + ""); // 字符串化 调用toString() 类型转化
// console.log(person.toString());
// const arr = ['Horace', 'IVA'];
// console.log(arr instanceof Array);
// console.log(Object.prototype.toString.call(arr)); // { }
// [object Array]

function Man(name, age) { 
    // Person 构造函数 把父类的构造函数执行一下
    console.log(arguments, '--------');
    Person.apply(this, arguments);
}
Man.prototype = Object.create(Person.prototype);
// 覆盖Person的toString方法
Man.prototype.toString = function() {
    return 'I am a 007, my name is ' + this.name;
}
var cxc = new Man('陈新初', 19);
console.log(cxc + "");

