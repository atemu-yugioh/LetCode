const merge = (num1, n, num2, m, nums) => {
  let i = n - 1;
  let j = m - 1;
  let c = n + m - 1;

  while (i >= 0 && j >= 0) {
    if (num1[i] > num2[j]) {
      nums[c--] = num1[i--];
    } else {
      nums[c--] = num2[j--];
    }
  }
  while (i >= 0) {
    nums[c--] = num1[i--];
  }

  while (j >= 0) {
    nums[c--] = num2[j--];
  }
};

const mergeSort = (nums, n) => {
  if (n === 1) {
    return;
  }

  const mid = parseInt(n / 2);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid, n);

  mergeSort(left, left.length);
  mergeSort(right, right.length);

  merge(left, left.length, right, right.length, nums);
};

const num1 = [1, 3, 4];
const num2 = [2, 5, 6];
const nums = [5, 7, 4, 2, 1];
console.log(mergeSort(nums, nums.length));
console.log("🚀 ~ file: mergeSort.js:44 ~ nums:", nums);
