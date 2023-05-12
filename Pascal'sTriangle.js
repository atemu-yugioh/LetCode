const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

// i: 1 -> 5
// output[i=1] = [1]
// output[i=2] = [1, 1]
// output[i=3] = [1, 2, 1]
// output[i=4] = [1, 3, 3, 1]
// output[i=5] = [1, 4, 6, 4, 1]

// solution:
// - giá trị ở vị trí cur[index] = pre[index-1] + pre[index]
// - giá trị tại vị trí 0 và length-1 luông bằng 1

// output[i=1]:
// index [0]
// value [1]

// output[i=2]:
// index [0, 1]
// value [1, 1]

// output[i=3]:
// index [0, 1, 2]
// value [1, 2, 1]

// output[i=4]:
// index [0, 1, 2, 3]
// value [1, 3, 3, 1]

// output[i=5]:
// index [0, 1, 2, 3, 4]
// value [1, 4, 6, 4, 1]
const numRows = 5;

var generate = function (numRows) {
  let arrOutput = [];
  for (let i = 1; i <= numRows; i++) {
    // khởi tạo mảng input index tương ứng với giá trị của i
    let arrIndex = [];
    // mảng phía trước vừa được push vào
    const arrPrev = arrOutput[i - 2];

    for (let j = 0; j < i; j++) {
      // giá trị tại vị trí 0 và length-1 luông bằng 1
      if (j === 0 || j === i - 1) {
        arrIndex.push(1);
      } else {
        // giá trị ở vị trí cur[index] = pre[index-1] + pre[index]
        arrIndex.push(arrPrev[j] + arrPrev[j - 1]);
      }
    }
    arrOutput.push(arrIndex);
  }
  return arrOutput;
};

console.log(generate(numRows));
