// ý tưởng là quăng các phần tử nhỏ nhất lên đầu HOẶC các phần tử lớn nhất về cuối

const arr = [1, 3, 2, 4, 7, 6, 8, 9, 5, 3, 2];

const selectionSort = (arr) => {
  const n = arr.length;
  let currentIndex = 0;

  while (currentIndex < n) {
    let minIndex = currentIndex;
    for (let i = minIndex + 1; i < n; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    swap(arr, currentIndex++, minIndex);
  }

  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(selectionSort(arr));
