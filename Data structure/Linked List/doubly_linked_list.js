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

  // delete from beginning
  deleteAtFirst() {
    if (this.head === null) {
      console.log("Linked list empty");
      return null;
    }
    if (this.head.next === null) {
      this.head = this.tail = null;
    } else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head.next = null;
      this.head = newHead;
    }
    this.size--;
  }

  // delete from end
  deleteAtEnd() {
    if (this.head === null) {
      console.log("Linked list empty");
      return null;
    }
    if (this.head.next === null) {
      this.head = this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail.prev = null;
      this.tail = newTail;
    }
    this.size--;
  }

  // delete a position
  deleteBetween(position) {
    if (this.head === null) {
      return null;
    }
    if (position < 0 || position >= this.size) {
      return "Position invalid";
    }

    if (position === 0) {
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = this.tail = null;
      }
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      if (current.next) {
        previous.next = current.next;
        current.next.prev = previous;
      } else {
        previous.next = null;
        this.tail = previous;
      }
    }
    this.size--;
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
list.insertEnd(40);
list.insertBetween(20, 1);
list.insertBetween(30, 2);
// list.deleteAtFirst()
// list.deleteAtEnd()
// list.deleteBetween(2);
// list.printLinkedList();

console.log(list.searchInList(0))