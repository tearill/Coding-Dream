var _class;

let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true; // 装饰 MyClass 类，拥有 annotated 属性
}

console.log(MyClass.annotated); // 使用 babel 之前无法执行 -> decorator 比较新，node 不支持
