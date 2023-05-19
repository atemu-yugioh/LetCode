const ListNode = require("./install");

const insertFistList = (value, head = null) => {
  return new ListNode(value, head);
};

module.exports = {
  insertFistList,
};
