const ListNode = require("./install");

const deleteFirstNode = (head) => {
  if (head === null || head.nextNode === null) {
    return null;
  }

  head = head.nextNode;

  return head;
};

const deleteLastNode = (head) => {
  let dummy = new ListNode(0, head);
  let temp = dummy;

  while (temp.nextNode.nextNode !== null) {
    // nếu cái thằng đứng sau nó mả trỏ tới null thì có nghĩa là nó là thằng kế cuối
    temp = temp.nextNode; // mà nó đã là thằng kế cuối thì không cần dời qua phải để làm gì nữa, vì mục đích là tìm ra thằng đứng kết thằng cuối
    // để trỏ nó vào null là cắt được thằng cuối ra khỏi list
  }

  temp.nextNode = temp.nextNode.nextNode;

  return dummy.nextNode;
};

module.exports = {
  deleteFirstNode,
  deleteLastNode,
};
