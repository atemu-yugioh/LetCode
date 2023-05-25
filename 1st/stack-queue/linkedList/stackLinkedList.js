const ListNode = require("../linkedList");

class StackLinkedList {
  constructor() {
    this.topNode = null;
  }

  // add element to top
  push(value) {
    const newElement = new ListNode(value);
    // add to head linked list
    newElement.nextNode = this.topNode;
    this.topNode = newElement;
  }

  // remove top element stack
  pop() {
    if (!this.isEmpty()) {
      // stack không rỗng mới cho xóa
      // ==> xóa phần tử ở đầu danh sách liên kết
      const value = this.topNode.value;
      this.topNode = this.topNode.nextNode;
      return value;
    }
  }

  // return top element stack (not remove)
  peek() {
    if (!this.isEmpty()) {
      return this.topNode.value;
    }
  }

  // stack empty
  isEmpty() {
    return this.topNode === null;
  }

  // show
  show() {
    if (this.topNode === null) {
      console.log("Stack empty");
    } else {
      const arrValue = [];
      let temp = this.topNode;
      while (temp !== null) {
        arrValue.push(temp.value);
        temp = temp.nextNode;
      }

      console.log(arrValue.reverse());
    }
  }
}

// module.exports = StackLinkedList;

const stack = new StackLinkedList();
stack.show();
stack.push(0);
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.show();
stack.pop();
stack.show();
console.log(stack.peek());
stack.show();
