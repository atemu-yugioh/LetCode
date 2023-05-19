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

module.exports = {
  insertFistList,
  insertLastList,
};
