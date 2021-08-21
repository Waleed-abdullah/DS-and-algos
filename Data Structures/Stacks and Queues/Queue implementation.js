class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.isEmpty()) return 'The Queue is empty';
    else return this.first;
  }
  enqueue(value) {
    if (!value) {
      return 'Invalid input';
    }

    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'The Queue is empty';
    }

    const temp = this.first;
    this.first = temp.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return temp;
  }
  isEmpty() {
    if (!this.first) return true;
    else return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.peek();

console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
