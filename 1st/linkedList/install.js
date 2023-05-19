class ListNode {
  constructor(value, nextNode) {
    this.value = value === undefined ? 0 : value;
    this.nextNode = nextNode == undefined ? null : nextNode;
  }
}

module.exports = ListNode;
