// Time Complexity: O(n)
// Space Complexity: O(n)
// mảng quá nhiều phần tử => số covert quá lớn => phải dùng BigInt
var plusOne = function (digits) {
  var intergerDigits = BigInt(0);
  let result = [];
  for (const number of digits) {
    intergerDigits = BigInt(intergerDigits) * BigInt(10) + BigInt(number);
  }

  intergerDigits = intergerDigits + BigInt(1);

  intergerDigits = intergerDigits.toString();

  for (let i = 0; i < intergerDigits.length; i++) {
    result.push(parseInt(intergerDigits[i]));
  }

  return result;
};

// let plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] > 9) {
//       digits[i] = 0;
//     } else {
//       return digits;
//     }
//   }
//   console.log("digits", digits);
//   digits.unshift(1);
//   return digits;
// };

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
