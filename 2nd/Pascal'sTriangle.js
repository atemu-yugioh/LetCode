const numRows = 5;

const generate = (numRows) => {
  let arrResult = [];
  for (let i = 0; i < numRows; i++) {
    let arrPrev = arrResult[i - 1];
    let arrIndex = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arrIndex.push(1);
      } else {
        arrIndex.push(arrPrev[j - 1] + arrPrev[j]);
      }
    }
    arrResult.push(arrIndex);
  }
  return arrResult;
};

console.log(generate(numRows));
