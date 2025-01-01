class Stack {
  constructor() {
    this.stack = [];
  }

  push(itm) {
    this.stack.push(itm);
  }

  pop() {
    if (this.stack.length === 0) {
      return "Stack underflow";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  printStack() {
    for (let index = 0; index < this.size(); index++) {
      console.log(this.stack[index]);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack();

console.log(stack.peek()); // Output: 30
stack.printStack();

console.log(stack.pop()); // Output: 30
stack.printStack();

console.log(stack.size()); // Output: 2
