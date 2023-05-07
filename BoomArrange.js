/*Q:A boomerang is a V-shaped sequence that is either upright or upside down.
Specifically, a boomerang can be defined as: sub-array of length 3,
with the first and last digits being the same and the middle digit being different.
ex:
function_name([9, 5, 9, 5, 1, 1, 1]) ➞ 2

function_name([5, 6, 6, 7, 6, 3, 9]) ➞ 1

function_name([4, 4, 4, 9, 9, 9, 9]) ➞ 0*/

Answer:
/*========
Boom Arrange
=========*/
function countBoomArrange(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] == arr[i + 2]) {
      count++;
    }
  }
  console.log(count);
}
countBoomArrange([1,1,2,1]);