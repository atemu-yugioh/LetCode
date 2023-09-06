const {
  deleteFirstNode,
  deleteLastNode,
  deleteTheNodeK,
} = require("./deleteNode");
const { generate } = require("./generate");
const {
  insertFistList,
  insertLastList,
  insertTheNodeK,
} = require("./insertNode");
const ListNode = require("./install");
const { isPalindrome } = require("./isPalindrome");
const { deleteDuplicates } = require("./removeDuplicates");
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

const testInsertLastNode = (value, head) => {
  let newListNode = insertLastList(value, head);
  showListNode(newListNode);
  return newListNode;
};

const testInsertTheNodeK = (value, k, head) => {
  let newListNode = insertTheNodeK(value, k, head);
  showListNode(newListNode);
  return newListNode;
};

const testDeleteDuplicate = () => {
  // install List Node
  let node1 = new ListNode(1);
  let node2 = new ListNode(1);
  let node3 = new ListNode(2);
  let node4 = new ListNode(3);
  let node5 = new ListNode(3);
  node1.nextNode = node2;
  node2.nextNode = node3;
  node3.nextNode = node4;
  node4.nextNode = node5;

  let newListNode = deleteDuplicates(node1);
  showListNode(newListNode);
  return newListNode;
};

const testIsPalindrome = () => {
  // install List Node
  let node1 = new ListNode(1);
  let node2 = new ListNode(1);
  let node3 = new ListNode(2);
  let node4 = new ListNode(1);
  let node5 = new ListNode(1);
  node1.nextNode = node2;
  node2.nextNode = node3;
  node3.nextNode = node4;
  node4.nextNode = node5;

  let newListNode = isPalindrome(node1);
  console.log(newListNode);
};

let node = initListNode(10);
// testInsertFirstNode(0, node);
// testInsertLastNode(11, node);
// testInsertTheNodeK(12, 2, node);
// testDeleteFirstNode(node);
// testDeleteLastNode(node);
// testDeleteNodeK(5, node);

// testDeleteDuplicate();

testIsPalindrome();
