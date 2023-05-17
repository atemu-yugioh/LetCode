// Dùng 3 con trỏ để giải
// https://i.loli.net/2019/05/14/5cdac3209479073662.gif

const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

const merge = (nums1, m, nums2, n) => {
  let a = m - 1; // Vị trí cuối mảng nums1 có giá trị
  let b = n - 1; // Vị trí cuối mảng nums2
  let c = m + n - 1; // Vị trí cuối mảng là độ là sau khi gộp hai mảng lại

  // ** Nếu giá trị phần tử của mảng nào lớn hơn thì giảm vị trí của mảng đó và c đi 1 đơn vị
  while (a >= 0 && b >= 0) {
    // so sánh lần lượt các phần tử từ cuối mảng đến đầu mảng của 2 mảng nums1 và nums2
    // Nếu phần tử của mảng nào lớn hơn thì nums1[c] = giá trị của phần tử lớn hơn đó
    // giảm c và vị trí của mảng có phần tử vừa lớn hơn ở bước trên đi 1
    if (nums1[a] >= nums2[b]) {
      nums1[c] = nums1[a];
      a -= 1;
    } else {
      nums1[c] = nums2[b];
      b -= 1;
    }
    c -= 1;
  }

  // Nếu đã duyệt hết mảng nums1 mà mảng nums2 vẫn còn
  // có nghĩa là các giá trị còn lại của mảng nums2 là nhỏ nhất
  // nên cứ hạ c xuống 1 đơn vị rồi gán = là oke
  while (b >= 0) {
    nums1[c] = nums2[b];
    b -= 1;
    c -= 1;
  }

  return nums1;
};

console.log(merge(nums1, m, nums2, n));
