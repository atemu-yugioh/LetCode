const arr = [3, 2, 2, 1, 6, 5, 1];
const target = 2;

const solution = (arr, target) => {
  // quăng hết các phần tử bé hơn target sang bên trái

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      swap(arr, count, i);
      count++;
    }
  }

  // quăng hết các phần tử lớn hơn target sang bên phải
  count = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > target) {
      swap(arr, count, i);
      count--;
    }
  }

  return arr;
};

const swap = (arr, currentIndex, minIndex) => {
  const temp = arr[currentIndex];
  arr[currentIndex] = arr[minIndex];
  arr[minIndex] = temp;
};

console.log(solution(arr, target));
