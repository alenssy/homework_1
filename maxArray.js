function largestOfFour(arr) {
  let maxArr=[];
  let maxSub;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      maxSub = Math.max(...arr[i]);
    }
    maxArr.push(maxSub)
  }
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);