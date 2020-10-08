/*
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/

const range = function (start, end, step) {
  let newArray = [];
  if (
    start > end ||
    step <= 0 ||
    start === undefined ||
    end === undefined ||
    step === undefined
  ) {
    return [];
  }
  for (let i = start; i <= end; i += step) {
    newArray.push(i);
  }
  return newArray;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
