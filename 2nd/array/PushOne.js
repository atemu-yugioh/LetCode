// cho 1 mảng số nguyên nums = [1,2,3]
// chuyển thanhffinteger: nums = [1,2,3] => integer = 123
// + 1 đơn vị: 123 + 1 = 124
// outArr: [1,2,4]

// vd
// nums = [9,9]
// outArr = [1,0,0]

const PushOne = (digits) => {
  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index] += 1;
    if (digits[index] > 9) {
      digits[index] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

console.log(PushOne([9, 9]));
