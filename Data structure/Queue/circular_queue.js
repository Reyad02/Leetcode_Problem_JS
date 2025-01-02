class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.rear === -1;
  }

  enqueue(itm) {
    if (this.isFull()) {
      return "Queue stack overflow";
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = itm;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue stack underflow";
    }
    const item = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return item;
  }

  peekRear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[this.rear];
  }

  peekFront() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[this.front];
  }

  printQueue() {
    let result = [];
    let i = this.front;
    while (true) {
      result.push(this.queue[i]);
      if (i === this.rear) {
        break;
      }
      i = (i + 1) % this.size;
    }
    console.log(result);
  }
}

const circularQueue = new Queue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);

// circularQueue.printQueue();

console.log(circularQueue.dequeue()); // Output: Dequeued: 10
console.log(circularQueue.dequeue()); // Output: Dequeued: 20

circularQueue.enqueue(50);
circularQueue.enqueue(60);
circularQueue.enqueue(70);
const res = circularQueue.enqueue(80);


console.log(res);
