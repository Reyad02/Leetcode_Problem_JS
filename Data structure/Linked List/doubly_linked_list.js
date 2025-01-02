class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //   insert node at the beginning of the linked list
  insertBeginning(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  //   insert node at the end of the linked list
  insertEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  // insert in a fixed position
  insertBetween(value, position) {
    if (position < 0 || position > this.size) {
      return "Position invalid";
    }
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
    } else {
      let current = this.head;
      let previousNode = null;
      let index = 0;
      while (index < position) {
        previousNode = current;
        current = current.next;
        index++;
      }
      previousNode.next = newNode;
      newNode.prev = previousNode;
      if (current) {
        newNode.next = current;
        current.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.size++;
    }
  }

  printLinkedList() {
    if (this.head === null) {
      console.log("This list is empty");
      return;
    }
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

const list = new DoublyLinkedList();
list.insertBeginning(10);
// list.insertEnd(40);
// list.insertBetween(1,20);
// list.insertEnd(30);
list.insertBetween(20, 1);
list.printLinkedList();
