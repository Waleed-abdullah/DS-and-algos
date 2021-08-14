class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.isEmpty()) return 'The stack is empty';
    else return this.top;
  }

  push(value) {
    if (!value) {
      return 'invalid value';
    }

    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return 'The stack is empty';
    }

    const temp = this.top;
    this.top = temp.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return temp;
  }

  isEmpty() {
    if (!this.bottom) return true;
    else return false;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.peek();

//Discord
//Udemy
//google
