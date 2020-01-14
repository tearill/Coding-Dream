// call方式继承/借用构造函数继承
function Parent1() {
    this.name = "parent1";
    function say() {
        console.log('say');
    }
}
function Child1() {
    Parent1.call(this);
    this.type = 'child1';
}
console.log(new Child1());
//console.log(new Child1().say()); // TypeError: (intermediate value).say is not a function

// 原型链式继承（借用原型链实现继承）
function Parent2() {
    this.name = 'parent2';
    this.arr = [1, 2, 3];
    
}
function Child2() {
    this.type = 'child2';
}
Child2.prototype = new Parent2();
console.log(new Child2()); // Parent2 { type: 'child2' }
var s1 = new Child2();
var s2 = new Child2();
s1.arr.push(4);
// 两个实例使用同一个实例对象 共享原型链
console.log(s1.arr, s2.arr); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

// 组合式继承
function Parent3() {
    this.name = 'parent3';
    this.arr = [1, 2, 3];
}
function Child3() {
    Parent3.call(this);
    this.type = 'child3';
}
Child3.prototype = new Parent3();
console.log(new Child3());
var s1 = new Child3();
var s2 = new Child3();
s1.arr.push(4);
// 实现实例化对象隔离
console.log(s1.arr, s2.arr);

// 组合式继承优化1
function Parent4() {
    this.name = 'parent4';
    this.arr = [1, 2, 3];
}
function Child4() {
    Parent4.call(this);
    this.type = 'child4';
}
Child4.prototype = Parent4.prototype;
var s1 = new Child4();
var s2 = new Child4();
console.log(s1, s2);
// 无法区分是由Child4还是Parent4实例化的
console.log(s1 instanceof Child4); // true
console.log(s2 instanceof Parent4); // true
// s1的构造函数是父类Parent4而不是Child4
console.log(s1.constructor.name); // Parent4

// 组合式继承优化2
function Parent5() {
    this.name = 'parent5';
    this.arr = [1, 2, 3];
}
function Child5() {
    Parent5.call(this);
    this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
console.log(new Child5());