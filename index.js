class Stack {
  constructor() {
    this.arr = [];
  }

  // Add an element to the stack
  push(num) {
    this.arr.push(num);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.arr.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.arr[this.arr.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.arr.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.arr.length;
  }

  // Clear the stack
  clear() {
    this.arr = [];
  }

  // Show the current stack
  showStack() {
    return this.arr;
  }
}

let stack = new Stack();
stack.push(5);
stack.push(12);
stack.push(20);

console.log("Stack:", stack.showStack()); // [5, 12, 20]
console.log("Peek:", stack.peek()); // 20
console.log("Pop:", stack.pop()); // 20
console.log("Stack after pop:", stack.showStack()); // [5, 12]
console.log("Size of stack:", stack.size()); // 2
console.log("Is stack empty?", stack.isEmpty()); // false
stack.clear();
console.log("Stack after clear:", stack.showStack()); // []
