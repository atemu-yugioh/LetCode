class ListNode {
  constructor(value, nextNode) {
    this.value = value === undefined ? null : value;
    this.nextNode = nextNode ? nextNode : null;
  }
}

module.exports = ListNode;
