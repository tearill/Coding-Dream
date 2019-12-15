// 设计一个栈 Stack
// 支持 push，pop，top 
// 获得最小值
// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

function MinStack() {
    this.stack = [];//使用数组模拟栈
    this.min = Number.MAX_VALUE;
}

MinStack.prototype.push = function(x) {
    if(x < this.min) {
        this.min = x;
    } 
    return this.stack.push(x);
}
MinStack.prototype.pop = function() {
    const item = this.stack.pop();
    return item;
}
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1 ]; 
}
MinStack.prototype.getMin = function() {
    return this.min;
}
    MinStack.prototype.toString = function() {
    return this.stack.join(',');
}

var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.toString());
console.log(stack.getMin());