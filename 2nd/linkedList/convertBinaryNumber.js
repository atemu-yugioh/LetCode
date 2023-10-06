const { ListNode } = require("./install");

let node1 = new ListNode(1);
let node2 = new ListNode(0);
let node3 = new ListNode(1);
node1.nextNode = node2;
node2.nextNode = node3;

const convertBinaryToNumber = (head) => {
  if (head === null) {
    return 0;
  }

  if (head.nextNode === null) {
    return head.value;
  }

  let temp = head;
  let tempArr = [];
  let decimal = 0;

  while (temp !== null) {
    tempArr.unshift(temp.value);
    temp = temp.nextNode;
  }

  for (let index = 0; index < tempArr.length; index++) {
    decimal += tempArr[index] * Math.pow(2, index);
  }
  return decimal;
};

convertBinaryToNumber(node1);
