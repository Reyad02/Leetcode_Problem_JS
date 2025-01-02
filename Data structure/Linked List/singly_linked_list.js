class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert at the first of the linked list
  insertBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // insert at the last of the linked list
  insertEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // insert between the linked list or as a last node
  insertBetween(value, position) {
    if (position < 0 || position > this.size) {
      return "Position invalid";
    }
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = newNode;
      newNode.next = current;
      this.size++;
    }
  }

  printLinkedList() {
    if (this.head === null) {
      return "Empty Linked List";
    }
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }
}

const list = new SinglyLinkedList();
list.insertBeginning(10);
list.insertEnd(20);
list.insertBetween(30, 2);
console.log(list.printLinkedList());