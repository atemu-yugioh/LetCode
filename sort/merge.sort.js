// // merge 2 mảng đã được sort đung kỹ thuật 3 con trỏ

const merge = (arr1, len1, arr2, len2, nums = []) => {
  let lastPositionArr1 = len1 - 1;
  let lastPotisionArr2 = len2 - 1;
  let c = len1 + len2 - 1;

  while (lastPositionArr1 >= 0 && lastPotisionArr2 >= 0) {
    if (arr1[lastPositionArr1] <= arr2[lastPotisionArr2]) {
      nums[c--] = arr2[lastPotisionArr2--];
    } else {
      nums[c--] = arr1[lastPositionArr1--];
    }
  }

  while (lastPositionArr1 >= 0) {
    nums[c--] = arr1[lastPositionArr1--];
  }

  while (lastPotisionArr2 >= 0) {
    nums[c--] = arr2[lastPotisionArr2--];
  }

  return nums;
};

const mergeSort = (nums, len) => {
  if (len === 1) {
    return;
  }

  const mid = parseInt(len / 2);

  // const arrLeft = arr.slice(0, mid);

  // const arrRight = arr.slice(mid, len);

  const arrLeft = [];
  const arrRight = [];

  for (let i = 0; i < mid; i++) {
    arrLeft[i] = nums[i];
  }

  for (let i = 0; i < len - mid; i++) {
    arrRight[i] = nums[i + mid];
  }

  mergeSort(arrLeft, mid);
  mergeSort(arrRight, len - mid);

  merge(arrLeft, arrLeft.length, arrRight, arrRight.length, nums);
};

const arr = [5, 4, 3, 2, 1, 3];

mergeSort(arr, arr.length);

console.log(arr);
