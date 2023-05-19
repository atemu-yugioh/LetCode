// 1 linked list là 1 sợi dây liên kết các node lại với nhau
// phần tử đầu tiên (head) được xem là đại diện cho linked list đó
// muốn truy xuất đến 1 vị trí biết trước trong mảng O(1)
// muốn truy xuất đến 1 vị trí n trong linked list thì phải duyệt qua n phần tử mới lấy được phần tử đó => O(n)
// phàn next của 1 node sẽ trỏ đến địa chỉ của 1 node tiếp theo

// ! các thao tác với linked list
// ! 1. CÀI ĐẶT LINKED LIST
// ! 2. THÊM PHẦN TỬ VÀO ĐẦU LINKED LIST
// ! 3. THÊM PHẦN TỬ VÀO CUỐI LINKED LIST
// ! 4. THÊM PHẦN TỬ VÀO GIỮA LINKED LIST
// ! 5. XÓA PHẦN TỬ ĐẦU LINKED LIST
// ! 6. XÓA PHẦN TỬ CUỐI LINKED LIST
// ! 7. XÓA PHẦN TỬ GIỮ LINKED LIST

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
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

// INSERT TO LIST

const insertToFirst = (value, head) => {
  let newNode = new ListNode(value);

  if (head !== null) {
    newNode.next = head;
  }
  return newNode;
};

const insertToLast = (value, head) => {
  let newNode = new ListNode(value);
  let temp = head;

  if (head === null) {
    return newNode;
  }

  // get element last in list
  while (temp.next !== null) {
    // nếu temp.next === null thì nó đã là thằng cuối cùng trong danh sách rồi
    temp = temp.next; // dịch nó qua bên phải 1 lần cho đến khi nó là thằng cuối cùng
  }

  temp.next = newNode;

  return head;
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

const deleteFirstNode = (head) => {
  if (head !== null) {
    head = head.next;
  }
  return head;
};

const deleteLastNode = (head) => {
  let temp = head;

  if (temp === null || temp.next === null) {
    return null;
  }

  while (temp.next !== null) {
    if (temp.next.next === null) {
      temp.next = null;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

const deleteTheKNode = (k, head) => {
  let dummy = new ListNode(0, head);
  let temp = dummy;

  for (let index = 0; index <= k - 1; index++) {
    // thoát khỏi vòng lặp thì temp sẽ là node đứng trước node cần xóa
    temp = temp.next;
  }

  temp.next = temp.next.next;

  return dummy.next;
};

const reverseList = (head) => {
  let cur = head;
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
    cur.next = nextNode.next;
    nextNode.next = head;
    head = nextNode;
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
console.log("INSERT TO LIST");
let nodeI = insertToList(6, 5, node1);
showListNode(nodeI);

let nodeIF = insertToFirst(0, node1);
showListNode(nodeIF);

let nodeIL = insertToLast(7, node1);
showListNode(nodeIL);

// delete first node
let nodeFD = deleteFirstNode(node1);
showListNode(nodeFD);

// delete last node
let nodeLD = deleteLastNode(node1);
showListNode(nodeLD);

// delete Node K
let nodeK = deleteTheKNode(0, node1);
showListNode(nodeK);

// 1 2 3
// 0 1 2 => k
// node1 = removeTheKNode(2, node1).next;
// console.log(removeTheKNode(2, node1).next);

// k = 2 => value = 3 ==> { val: 1, next: ListNode { val: 2, next: null } }
// console.log(insertToList(6, 2, node1));
// console.log(node1);
// console.log(reverseList2(node1));
