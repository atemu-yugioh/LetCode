// Time Complexity: O(n)
// Space Complexity: O(n)
const isPalindrome = (head) => {
  if (head === null || head.nextNode === null) {
    return true;
  }

  let tempArr = [];

  let temp = head;

  while (temp !== null) {
    tempArr.push(temp.value);
    temp = temp.nextNode;
  }

  for (let index = 0; index < Math.ceil(tempArr.length / 2); index++) {
    if (tempArr[index] !== tempArr[tempArr.length - 1 - index]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isPalindrome,
};
