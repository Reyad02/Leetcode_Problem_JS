// double ended means at a time this queue can insert and remove item at front and rear

class Queue {
  constructor() {
    this.queue = [];
  }

  addFront(itm) {
    this.queue.unshift(itm);
  }

  addRear(itm) {
    this.queue.push(itm);
  }

  removeFront() {
    if (this.isEmpty()) {
      return "queue is underflow";
    }

    return this.queue.shift();
  }

  removeRear() {
    if (this.isEmpty()) {
      return "queue is underflow";
    }

    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "queue is underflow";
    }

    return this.queue[0];
  }

  rear() {
    if (this.isEmpty()) {
      return "queue is underflow";
    }

    return this.queue[this.queue.length - 1];
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    for (let index = 0; index < this.size(); index++) {
      console.log(this.queue[index]);
    }
  }
}

const deque = new Queue();

// Add elements at the front and rear
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);
deque.addRear(25);

deque.printQueue(); // Output: 5, 10, 20, 25

console.log("Front:", deque.peek()); // Output: Front: 5
console.log("Rear:", deque.rear()); // Output: Rear: 25

deque.removeFront();
deque.removeRear();

deque.printQueue(); // Output: 10, 20

console.log("Size:", deque.size()); // Output: Size: 2
console.log("Is empty:", deque.isEmpty()); // Output: Is empty: false
