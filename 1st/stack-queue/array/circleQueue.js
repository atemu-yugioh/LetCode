// Time Complexity: O(k)
//   --> enQueue: O(1)
//   --> deQueue: O(k)
//   --> enQueue: O(1)
//   --> enQueue: O(1)
// Space Complexity: O(k)

class MyCircularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k;
  }

  enQueue(value) {
    if (this.isFull()) {
      // queue full return false
      return false;
    } else {
      this.queue.push(value);
      return true;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      // queue empty return false
      return false;
    } else {
      this.queue.shift();
      return true;
    }
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.queue[0];
    }
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.queue[this.queue.length - 1];
    }
  }

  isFull() {
    return this.queue.length === this.size;
  }

  isEmpty() {
    return !this.queue.length;
  }
}

const queue = new circleQueue(3);
console.log(queue.enQueue(1));
console.log(queue.enQueue(2));
console.log(queue.enQueue(3));
console.log(queue.enQueue(4));
console.log(queue.Rear());
console.log(queue.isFull());
console.log(queue.deQueue());
console.log(queue.enQueue(4));
console.log(queue.Rear());
