class QueueArray {
  constructor() {
    this.queue = [];
  }

  // push element to queue
  enqueue(element) {
    this.queue.push(element);
  }

  // remove element of queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // return first element queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  // check queue empty
  isEmpty() {
    return !Boolean(this.queue.length);
  }

  // show
  show() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      console.log(this.queue);
    }
  }

  // size
  size() {
    return this.queue.length;
  }
}

module.exports = QueueArray;
