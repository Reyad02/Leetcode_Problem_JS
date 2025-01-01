class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(itm) {
    this.queue.push(itm);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is underflow";
    }

    return this.queue.shift();
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

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Front:", q.peek()); // Output: Front: 10
console.log("Rear:", q.rear()); // Output: Rear: 30
console.log("Size:", q.size()); // Output: Size: 3

q.printQueue(); // Output: 10, 20, 30

q.dequeue();
console.log("After dequeue:");
q.printQueue(); // Output: 20, 30
