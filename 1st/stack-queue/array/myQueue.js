const StackArray = require("./stackArray");

class MyQueue {
  constructor() {
    this.mainQueue = new StackArray();
    this.queue = new StackArray();
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.createMainQueue();
    return this.mainQueue.pop();
  }

  top() {
    this.createMainQueue();
    return this.mainQueue.peek();
  }

  show() {
    this.createMainQueue();
    this.mainQueue.show();
  }

  empty() {
    this.createMainQueue();
    return this.mainQueue.isEmpty();
  }

  createMainQueue() {
    if (this.mainQueue.isEmpty()) {
      // nếu main queue mà rỗng
      // thì đỏ giá trị của queue tạm vào main queue
      while (this.queue.size() > 0) {
        this.mainQueue.push(this.queue.pop());
      }
    }
  }
}

const queue = new MyQueue();
queue.show();
queue.enqueue(1);
queue.enqueue(2);
queue.show();
console.log(queue.top());
