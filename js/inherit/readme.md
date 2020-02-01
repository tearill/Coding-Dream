# js中的几种继承方式
- 可参考：https://mp.weixin.qq.com/s?__biz=MzI0MDIwNTQ1Mg==&mid=2676491918&idx=1&sn=2a30b02356595e974537c78b2a82f8eb&chksm=f362cd6dc415447b96cd97db4857b40146ee1b8ba1191ecffdb30644152c6386373a2b5717c1#rd
  - es5 中
    1. call方式继承 / 借用构造函数继承  
       把父类构造函数的this指向为子类实例化对象引用，从而导致父类执行的时候父类里面的属性都会被挂载到子类的实例上去  
       ```
       function Parent1() {
           this.name = 'parent1';
       }
       function Child1() {
           Parent1.call(this);
           this.type = 'child1'
       }
       ```
       - 缺点：无法继承父类中的方法，无法继承父类原型上的属性和方法  
    2. 原型链式继承（借用原型链实现继承）
       ```
       function Parent2() {
          this.name = 'parent2';
          this.arr = [1, 2, 3];
       }
       function Child2() {
          this.type = 'child2';
       }
       Child2.prototype = new Parent2();
       ```
       - 缺点：构建的Child2对象会共享原型链，修改原型上的数据会导致子类中的属性全部跟着改变，实例化对象无法实现隔离
    3. 组合式继承  
       组合借用构造函数和原型链继承两种方式  
       ```
       function Parent3() {
          this.name = 'parent3';
          this.arr = [1, 2, 3];
       }
       function Child3() {
          Parent3.call(this);
          this.type = 'child3';
       }
       Child3.prototype = new Parent3();
       ```
       实现了实例化对象的隔离  
       - 缺点：会多执行一次父类的构造函数，父类的构造函数被执行了两次  
                第一次：Child3.prototype = new Parent3();  
                第二次：使用new实例化新对象的时候  
    4. 组合式继承优化1  
       直接把父类的原型对象赋给子类的原型对象  
       ```
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
       console.log(s1 instanceof Child4); // true
       console.log(s1.constructor.name); // Parent4
       ```
       - 缺点：instanceOf无法区分对象是由Child4还是Parent4实例化的，s1的构造函数是父类Parent4而不是Child4  
    5. 组合式继承优化2(继承最完美的方式)  
       ```
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
       ```
       - Object.create是一种创建对象的方式，它会创建一个中间对象  
       ```
       var p = {name: "p"}
       var obj = Object.create(p)
       // Object.create({ name: "p" })
       ```
       - 通过这种方式创建对象，新创建的对象obj的原型就是p，同时obj也拥有了属性name，这个新创建的中间对象的原型对象就是它的参数。