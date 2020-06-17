// 继承
function supFather(name) {
  this.name = name;
  this.color = ['red', 'blue', 'green'];
}

supFather.prototype.sayName = function(age) {
  console.log(this.name, age);
}

function sub(name, age) {
  supFather.call(this, name); // call 借用构造继承
  this.age = age;
}

function inheritPrototype(sonFn, fatherFn) {
  // 完成子类对父类的继承，Object.create 获得原型对象
  sonFn.prototype = Object.create(fatherFn.prototype);
  sonFn.prototype.constructor = sonFn;
}

inheritPrototype(sub, supFather);
sub.prototype.sayAge = function() {

}