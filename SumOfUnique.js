// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

// cách 1
// dùng brute forte để duyệt hết các phần tử trong mảng
// Time: O(n^2)
// Space: O(1)
const sumOfUnique = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      sum += nums[i];
    }
  }
  return sum;
};

// cách 2:
// dùng 1 mảng có độ dài (length) bằng M+1 phần tử
// với M = Max(nums): giá trị lớn nhất trong mảng
// *** vì M là giá trị lớn nhất nên để có được arr[M] thì mảng bắt buộc phải có lenght = M+1
// vd: a[3] thì length của mảng phải = 3+1 = 4
// làm gì với mảng vừa tạo này ?
// mảng này sẽ fill tất cả các giá trị = 0 => vd: [0,0,0,0]
// sau đó sẽ dùng vòng for duyệt mảng nums
// ý tưởng là lấy giá trị value của nums[i] làm index cho arr vừa tạo
// và khi duyệt mảng nums thì mỗi value được duyệt qua thì sẽ tăng giá trị của index tương ứng trong mảng arr lên 1
// nums: [1,2,3,2]
// arr[nums[0]] = arr[1] += 1 ==> [0,1,0,0]
// arr[nums[1]] = arr[2] += 1 ==> [0,1,1,0]
// arr[nums[2]] = arr[3] += 1 ==> [0,1,1,1]
// arr[nums[3]] = arr[2] += 1 ==> [0,1,2,1]
// ===> // arr: [0,1,2,1]
// index của mảng arr = giá trị của mảng nums
// giá trị của mảng arr = số lần lặp lại của giá trị của nums

// duyệt for mảng nums thêm 1 lần nữa
// check arr[index = nums[i]] === 1: có nghĩa là duy nhất thì sum += nums[i]
// ngược lại là không phải

// Time: O(n) + O(n) + O(n) => O(n)
// Space: O(maxValue + 1)
const sumOfUniqueV2 = (nums) => {
  let sum = 0;

  // Tìm phần tử lớn nhất trong mảng
  const maxValue = Math.max(...nums);

  // tạo mảng fill tất cả value = 0 và phải đảm bảo tempArr.length = maxValue + 1
  let tempArr = [];
  for (let i = 0; i < maxValue + 1; i++) {
    tempArr.push(0);
  }

  // đếm số lần lặp lại của các giá trị trong mảng nums và lưu lại vào mảng tempArr
  // với index của tempArr = value của nums
  // giá trị của tempArr = số lần lặp lại giá trị đó của nums
  for (let i = 0; i < nums.length; i++) {
    tempArr[nums[i]] += 1;
  }

  // duyệt mảng nums để check xem vị trí nào không lặp lại thì sum += value
  for (let i = 0; i < nums.length; i++) {
    if (tempArr[nums[i]] === 1) {
      sum += nums[i];
    }
  }

  return sum;
};

console.log(sumOfUniqueV2([1, 2, 3, 2]));
console.log(sumOfUnique([1, 2, 3, 2]));
