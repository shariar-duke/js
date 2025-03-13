class Stack {
  constructor() {
    this.arr = [];
  }

  push(num) {
    this.arr.push(num);
  }

  showStack() {
    return this.arr;
  }
}

let stack = new Stack();
stack.push(5);
stack.push(12);

console.log(stack.showStack());
