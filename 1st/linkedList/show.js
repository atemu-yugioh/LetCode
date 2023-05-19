const ListNode = require("./install");

const showListNode = (head) => {
  let temp = head;
  let str = "";
  if (head === null) {
    console.log("List is empty");
  }

  while (temp !== null) {
    str += temp.nextNode ? `${temp.value} -->` : `${temp.value}`;
    temp = temp.nextNode;
  }

  console.log(str);
};

module.exports = {
  showListNode,
};
