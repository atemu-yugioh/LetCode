// cho 1 mảng số nguyên nums = []
// tính tổng của các phần tử chỉ xuất hiện 1 lần trong mảng (duy nhất)
// vd
// nums = [1,2,3,2]
// => sum = 1 + 3 = 4

// time: O(n^2)
// space: O(1)
const sumOfUnique = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    let count = 0;
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[i] === numArr[j]) {
        count++;
      }
    }
    if (count === 1) {
      sum += numArr[i];
    }
  }
  return sum;
};

// Time: O(n)
//Space: O(n)
const sumOfUniqueV2 = (numArr) => {
  const maxValue = Math.max(...numArr);

  // để có được prefixArr[maxValue] thì length = MaxValue+1
  let prefixArr = new Array(maxValue + 1).fill(0);

  for (let index = 0; index < numArr.length; index++) {
    prefixArr[numArr[index]] += 1;
  }

  // sum
  let sum = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (prefixArr[numArr[index]] === 1) {
      sum += numArr[index];
    }
  }

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUniqueV2([1, 2, 3, 2]));
