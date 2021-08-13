// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index === this.length) {
      this.append(value);
      return this.printList();
    }
    if (index > this.length || index < 0) {
      return 'invalid index';
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);

    const pointer = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = pointer;
    pointer.previous = newNode;

    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return this.printList();
    }

    if (index >= this.length || index < 0) {
      return 'No such index exists';
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const nextNode = unwantedNode.next;
    leader.next = nextNode;
    nextNode.previous = leader;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 4);
myLinkedList.insert(4, 5);
myLinkedList.remove(4);
myLinkedList.remove(0);
myLinkedList.remove(1);
console.log(myLinkedList);
myLinkedList.printList();
