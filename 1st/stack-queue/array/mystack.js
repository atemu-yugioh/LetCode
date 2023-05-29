const QueueArray = require("./queueArray");

class MyStack {
  constructor() {
    this.stack = new QueueArray();
  }

  push(x) {
    this.stack.enqueue(x);

    let size = this.stack.size();

    while (size > 1) {
      this.stack.enqueue(this.stack.dequeue());
      size -= 1;
    }
  }

  pop() {
    return this.stack.dequeue();
  }

  top() {
    return this.stack.peek();
  }

  empty() {
    return this.stack.isEmpty();
  }

  show() {
    this.stack.show();
  }
}
