const mergeSort = (nums = [], n) => {
  if (n === 1) {
    return;
  }

  const mid = parseInt(n / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < mid; i++) {
    left[i] = nums[i];
  }

  for (let i = 0; i < n - mid; i++) {
    right[i] = nums[i + mid];
  }

  mergeSort(left, mid);
  mergeSort(right, n - mid);

  merge(left, mid, right, n - mid, nums);
};

const merge = (left = [], m, right = [], n, nums = []) => {
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < m && j < n) {
    if (left[i] < right[j]) {
      nums[count++] = left[i++];
    } else {
      nums[count++] = right[j++];
    }
  }

  while (i < m) {
    nums[count++] = left[i++];
  }

  while (j < n) {
    nums[count++] = right[j++];
  }

  return nums;
};

const arr = [5, 4, 3, 2, 1];

console.log(mergeSort(arr, arr.length));
console.log(arr);
