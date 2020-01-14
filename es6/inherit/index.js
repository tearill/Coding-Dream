class Parent {
}
class Child1 extends Parent {
    constructor(x, y, colors) {
        super(x, y); // 调用父类的constructor(x, y)
        this.colors = colors;
    }
    toString() {
        return this.colors + ' ' + super.toString(); // 调用父类的toString()
    }
}