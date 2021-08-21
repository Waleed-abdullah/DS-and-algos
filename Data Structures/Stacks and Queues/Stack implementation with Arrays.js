class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    if (this.isEmpty()) return 'The stack is empty';
    else return this.array[this.array.length - 1];
  }

  push(value) {
    if (!value) {
      return 'invalid value';
    }

    this.array.push(value);
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return 'The stack is empty';
    }

    this.array.pop();
    return this;
  }

  isEmpty() {
    if (this.array.length === 0) return true;
    else return false;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);

//Discord
//Udemy
//google
