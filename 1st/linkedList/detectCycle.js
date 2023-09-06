// Time Complexity: O(n)
// Space Complexity: O(1)
const detectCycle = (head) => {
  // New empty set to store list nodes
  let nodesList = new Set();

  while (head) {
    // check head exist in nodeList ?
    if (nodesList.has(head)) {
      return head;
    }
    // Add node to set
    nodesList.add(head);

    // Move the pointer to next node if existed
    head = head.next;
  }
  // Return null if no node found in the list
  return null;
};

module.exports = {
  detectCycle,
};
