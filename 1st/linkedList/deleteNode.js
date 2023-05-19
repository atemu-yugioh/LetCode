const deleteFirstNode = (head) => {
  if (head === null || head.nextNode === null) {
    return null;
  }

  head = head.nextNode;

  return head;
};

module.exports = {
  deleteFirstNode,
};
