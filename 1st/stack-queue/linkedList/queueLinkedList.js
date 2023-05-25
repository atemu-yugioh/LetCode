const ListNode = require("./linkedList");

class QueueLinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  // add element to queue
  enqueue(value) {
    // add to last linked list => O(n) <==> add to tail => O(1)
    const newElement = new ListNode(value);
    if (this.isEmpty()) {
      this.headNode = newElement;
      this.tailNode = newElement;
    } else {
      this.tailNode.nextNode = newElement;
      this.tailNode = newElement;
    }
  }

  // remove element queue
  dequeue() {
    if (!this.isEmpty()) {
      const value = this.headNode.value;
      this.headNode = this.headNode.nextNode;
      if (this.headNode === null) {
        this.tailNode = null;
      }
      return value;
    }
  }

  // return element top queue
  peek() {
    if (!this.isEmpty()) {
      const value = this.headNode.value;
      return value;
    }
  }

  // check empty queue
  isEmpty() {
    return this.headNode === null && this.tailNode === null;
  }

  // show queue
  show() {
    if (this.isEmpty()) {
      console.log("Queue empty");
    } else {
      const arrValue = [];
      let temp = this.headNode;
      while (temp !== null) {
        arrValue.push(temp.value);
        temp = temp.nextNode;
      }
      console.log(arrValue);
    }
  }
}

const queue = new QueueLinkedList();
queue.show();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
queue.show();
queue.dequeue();
queue.show();
console.log(queue.peek());
queue.dequeue();
queue.show();
console.log(queue.peek());
queue.dequeue();
queue.show();
