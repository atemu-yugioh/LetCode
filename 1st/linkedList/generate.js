const ListNode = require("./install");

const generate = (length) => {
  let dummy = new ListNode(0);
  let temp = dummy;
  for (let index = 1; index <= length; index++) {
    let newNode = new ListNode(index);
    temp.nextNode = newNode;
    temp = newNode;
  }

  return dummy.nextNode;
};

module.exports = {
  generate,
};
