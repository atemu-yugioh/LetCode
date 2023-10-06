// ý tưởng của selection sort: có 1 con trỏ là currentIndex, loop qua các phần tử trong mảng nếu giá trị nhỏ hơn current thì swap => O(n^2)
// tìm thằng nhở nhất quăng lên đầu và không xét đến nó nữa (currentIndex++;)
const arr = [3, 2, 2, 1, 6, 5, 1, 4];

const selectionSort = (nums) => {
  let currentIndex = 0;

  while (currentIndex < nums.length) {
    let minIndex = currentIndex;
    for (let i = minIndex + 1; i < nums.length; i++) {
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }
    swap(nums, currentIndex, minIndex);
    currentIndex += 1;
  }

  return nums;
};

const swap = (arr, currentIndex, index) => {
  const temp = arr[currentIndex];
  arr[currentIndex] = arr[index];
  arr[index] = temp;
};

console.log(selectionSort(arr));
