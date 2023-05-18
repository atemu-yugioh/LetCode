// cho 1 mảng nums = [] và 1 valueInput
// replace các phần tử có giá trị = valueInput bằng 1 giá trị khác trong mảng
// trả về số lượng phần tử khác valueInput trong mảng
// sao cho k phần tử đầu tiên của mảng không có giá trị nào = valueInput
// chỉ dùng mảng ban đầu và kích thước của mảng không đối

const removeElement = (numArr, valueInput) => {
  // Neo lại vị trí có value = valueInput
  // đến khi gặp phần tử có value != valueInput thì replace => tăng curIndex lên 1
  let curIndex = 0;
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] !== valueInput) {
      numArr[curIndex] = numArr[index];
      curIndex++;
    }
  }
  console.log(numArr);
  return curIndex;
};

console.log(removeElement([1, 3, 3, 2, 4], 3));
