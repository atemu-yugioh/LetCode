class StackArray {
  constructor() {
    this.stack = [];
  }

  // push element to stack (on top)
  push(element) {
    this.stack.push(element);
  }

  // remove element stack (on top)
  pop() {
    if (this.isEmpty()) return "Stack is empty!";
    return this.stack.pop();
  }

  // return element top of stack
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.stack[this.stack.length - 1];
  }

  // check stack empty
  isEmpty() {
    return !Boolean(this.stack.length); // nếu độ dài của mảng = 0 => stack rỗng
  }

  show() {
    if (this.isEmpty()) {
      console.log("Stack empty");
    } else {
      console.log(this.stack);
    }
  }

  size() {
    return this.stack.length;
  }
}

module.exports = StackArray;
