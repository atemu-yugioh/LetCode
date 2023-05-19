const { deleteFirstNode } = require("./deleteNode");
const { generate } = require("./generate");
const { showListNode } = require("./show");

const initListNode = (length) => {
  let listNode = generate(length);
  showListNode(listNode);
  return listNode;
};

const testDeleteFirstNode = (head) => {
  let newListNode = deleteFirstNode(head);
  showListNode(newListNode);
  return newListNode;
};

let node = initListNode(10);
node = testDeleteFirstNode(node);
