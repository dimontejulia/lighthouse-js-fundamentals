const concat = function (arr1, arr2) {
  let concatArr = [];
  for (let elem of arr1) {
    concatArr.push(elem);
  }
  for (let elem of arr2) {
    concatArr.push(elem);
  }
  return concatArr;
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
