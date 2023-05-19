const {
  deleteFirstNode,
  deleteLastNode,
  deleteTheNodeK,
} = require("./deleteNode");
const { generate } = require("./generate");
const { insertFistList } = require("./insertNode");
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

const testDeleteLastNode = (head) => {
  let newListNode = deleteLastNode(head);
  showListNode(newListNode);
  return newListNode;
};

const testDeleteNodeK = (k, head) => {
  let newListNode = deleteTheNodeK(k, head);
  showListNode(newListNode);
  return newListNode;
};

const testInsertFirstNode = (value, head) => {
  let newListNode = insertFistList(value, head);
  showListNode(newListNode);
  return newListNode;
};

let node = initListNode(10);
testInsertFirstNode(0, node);
testDeleteFirstNode(node);
testDeleteLastNode(node);
testDeleteNodeK(5, node);
