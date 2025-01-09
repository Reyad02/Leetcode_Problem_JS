class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    if (!this.head || priority > this.head.priority) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next && currentNode.next.priority >= priority) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return "Queue is empty";
    }
    this.head = this.head.next;
  }

  peek() {
    if (!this.head) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }

  printQueue() {
    if (!this.head) {
      return "Queue is empty";
    }

    let current = this.head;
    const result = [];
    while (current) {
      result.push(`[${current.value}, Priority: ${current.priority}]`);
      current = current.next;
    }
    return result.join(" -> ");
  }
}

const pq = new PriorityQueue();
// Enqueue elements with varying priorities
pq.enqueue("Task A", 3); // Priority 3
pq.enqueue("Task B", 1); // Priority 1
pq.enqueue("Task C", 2); // Priority 2
pq.enqueue("Task D", 5); // Priority 5
pq.enqueue("Task E", 4); // Priority 4
pq.enqueue("Task F", 2); // Priority 4


console.log(pq.printQueue());
