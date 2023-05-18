// 1 linked list là 1 sợi dây liên kết các node lại với nhau
// phần tử đầu tiên (head) được xem là đại diện cho linked list đó
// muốn truy xuất đến 1 vị trí biết trước trong mảng O(1)
// muốn truy xuất đến 1 vị trí n trong linked list thì phải duyệt qua n phần tử mới lấy được phần tử đó => O(n)
// phàn next của 1 node sẽ trỏ đến địa chỉ của 1 node tiếp theo

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const generateListNode = (length) => {
  let dummy = (temp = new ListNode(0)); // head

  for (let index = 1; index <= length; index++) {
    temp.next = new ListNode(index);
    temp = temp.next;
  }

  return dummy.next;
};

const removeTheKNode = (k, head) => {
  let dummy = new ListNode(0, head); // technique best practice
  let tmp = dummy;
  for (let i = 0; i <= k - 1; i++) {
    // O(k) for time
    tmp = tmp.next;
  }
  tmp.next = tmp.next.next;
  return dummy.next;
};

const insertToList = (value, k, head) => {
  let dummy = new ListNode(0, head);
  let temp = dummy;
  let newNode = new ListNode(value);
  for (let index = 0; index <= k - 1; index++) {
    temp = temp.next;
  }
  newNode.next = temp.next;
  temp.next = newNode;

  return dummy.next;
};

var reverseList = function (head) {
  let cur = head;
  console.log("🚀 ~ file: test.js:15 ~ reverseList ~ cur:", cur);
  let prev = null;
  let next;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

const reverseList2 = (head) => {
  let cur = head;

  while (cur != null && cur.next != null) {
    let nextNode = cur.next;
    // console.log("🚀 ~ file: test.js:34 ~ reverseList2 ~ nextNode:", nextNode);
    cur.next = nextNode.next;
    console.log("🚀 ~ file: test.js:37 ~ reverseList2 ~ cur:", cur);
    console.log("🚀 ~ file: test.js:36 ~ reverseList2 ~ head:", head);
    nextNode.next = head;
    console.log("🚀 ~ file: test.js:38 ~ reverseList2 ~ nextNode:", nextNode);
    head = nextNode;
    console.log("🚀 ~ file: test.js:40 ~ reverseList2 ~ head:", head);
  }

  return head;
};

const showListNode = (head) => {
  let str = "";
  if (head !== null) {
    while (head !== null) {
      str += head.next ? `${head.val} -->` : `${head.val}`;
      head = head.next;
    }
  }
  console.log(str);
};

// init list node 5 node
let node1 = generateListNode(5);
showListNode(node1);

// insert node
// node: 1 2 3 4 5
//dummy: 0 1 2 3 4 5
//    k: 0 1 2 3 4 5
let nodeI = insertToList(6, 5, node1);
showListNode(nodeI);

// 1 2 3
// 0 1 2 => k
// node1 = removeTheKNode(2, node1).next;
// console.log(removeTheKNode(2, node1).next);

// k = 2 => value = 3 ==> { val: 1, next: ListNode { val: 2, next: null } }
// console.log(insertToList(6, 2, node1));
// console.log(node1);
// console.log(reverseList2(node1));
