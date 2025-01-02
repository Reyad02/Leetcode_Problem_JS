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

  // delete from beginning
  deleteAtFirst() {
    if (this.head === null) {
      console.log("Linked list empty");
      return null;
    }
    this.head = this.head.next;
    this.size--;
  }

  // delete at last
  deleteAtLast() {
    if (this.head === null) {
      console.log("Linked list empty");
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.size = 0;
      return null;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.size--;
  }

  //   delete in a given position
  deleteBetween(position) {
    if (this.head === null) {
      return null;
    }
    if (position < 0 || position >= this.size) {
      return "Position invalid";
    }

    if (position === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    this.size--;
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

  getSize() {
    return this.size;
  }

//   searching in linked list 
  searchInList(target) {
    if (this.head === null) {
      console.log("Linked list empty");
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const list = new SinglyLinkedList();
list.insertBeginning(10);
list.insertEnd(30);
list.insertBetween(20, 1);
// console.log(list.printLinkedList());
// list.deleteAtFirst();
// list.deleteAtLast();
// list.deleteBetween(1);
// console.log(list.printLinkedList());
// console.log("Size:", list.getSize());
console.log(list.searchInList(30));
