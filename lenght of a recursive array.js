//Without Recursion
// function getLength(arr) {
//   let count = 0;
//   let new_array = arr.flat(100);
//   new_array.forEach((element) => {
//     count++;
//   });
//   return count;
// }


// Recursive Function
getLength([1, [2, [3, 4]]])
function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}
