const QueueArray = require("./queueArray");

class stackByQueue {
  constructor() {
    this.stack = new QueueArray();
  }

  // push
  push(value) {
    this.stack.enqueue(value);
    let size = this.stack.size();
    while (size > 1) {
      this.stack.enqueue(this.stack.dequeue());
      size -= 1;
    }
  }

  // pop
  pop() {
    return this.stack.dequeue();
  }

  // top
  top() {
    return this.stack.peek();
  }

  // show
  show() {
    this.stack.show();
  }

  // empty
  empty() {
    return this.stack.isEmpty();
  }
}

let stack = new stackByQueue();
console.log(stack.empty());
stack.show();
stack.push(1);
stack.push(2);
stack.show();
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());
