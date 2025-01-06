class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   insert data at the begining
  insertNodeAtBeginning(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  //   insert data at the end
  insertNodeAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }

  //   insert data at the given position
  insertNodeAtThePosition(value, pos) {
    const newNode = new Node(value);
    if (pos < 0 || pos > this.size) {
      return "position is greater or less then the exist nodes";
    }
    if (pos === 0) {
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== this.head) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    } else {
      let currentNode = this.head;
      let i = 0;
      let prevNode = null;
      while (i < pos) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      console.log(currentNode.value);
      prevNode.next=newNode;
      newNode.next = currentNode;

    }
    this.size++;
  }

  printLinkedList() {
    if (this.head === null) {
      return "Empty Linked List";
    }
    let result = [];
    let current = this.head.next;
    result.push(this.head.value);
    while (current !== this.head) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }
}

const cll = new CircularLinkedList();
cll.insertNodeAtBeginning(10);
cll.insertNodeAtBeginning(5);
cll.insertNodeAtEnd(20);
cll.insertNodeAtEnd(30);

cll.insertNodeAtThePosition(8, 0);
console.log(cll.printLinkedList());
