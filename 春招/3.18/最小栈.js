var MinStack = function() {
    this.stack = [];
    // 辅助栈
    this.minStack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    // 如果是第一次或者当前x比最小栈里的最小值还小才push x
    if(this.minStack.length === 0 || x < this.minStack[this.minStack.length - 1]){
        this.minStack.push(x)
    } else {
         this.minStack.push( this.minStack[this.minStack.length - 1])
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.stack.length - 1];
};