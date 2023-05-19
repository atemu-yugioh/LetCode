const ListNode = require("./install");

const insertFistList = (value, head = null) => {
  return new ListNode(value, head);
};

const insertLastList = (value, head = null) => {
  let temp = head;
  let newNode = new ListNode(value);

  while (temp.nextNode !== null) {
    temp = temp.nextNode;
  }

  temp.nextNode = newNode;

  return head;
};

const insertTheNodeK = (value, k, head) => {
  let dummy = new ListNode(0, head);
  let temp = dummy;
  let newNode = new ListNode(value);

  if (head.nextNode === null && k === 1) {
    return (head.nextNode = newNode);
  }

  for (let index = 0; index <= k - 1; index++) {
    temp = temp.nextNode;
  }

  newNode.nextNode = temp.nextNode;
  temp.nextNode = newNode;

  return dummy.nextNode;
};

module.exports = {
  insertFistList,
  insertLastList,
  insertTheNodeK,
};
