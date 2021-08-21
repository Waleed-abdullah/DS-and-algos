class MyQueue {
  constructor() {
    this.stack = [];
  }

  peek() {
    return !this.empty() ? this.stack[this.stack.length - 1] : null;
  }

  //enqueue
  push(value) {
    if (!value) {
      return 'invalid input';
    }

    const stack2 = [];
    while (this.stack.length > 0) {
      stack2.push(this.stack.pop());
    }
    stack2.push(value);
    while (stack2.length > 0) {
      this.stack.push(stack2.pop());
    }
    return this;
  }

  pop() {
    if (this.empty()) {
      return null;
    }
    return this.stack.pop();
  }

  empty() {
    return this.stack.length === 0;
  }
}
