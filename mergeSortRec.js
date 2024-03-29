function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return merge(
    mergeSort(arr.slice(0, arr.length / 2)), //left
    mergeSort(arr.slice(arr.length / 2, arr.length)) //right
  );
}

//merging logic
function merge(left, right) {
  let arr = [];
  let i = 0;
  let j = 0;
  for (let index = 0; index < left.length + right.length; index++) {
    if (left[i] === undefined && right[j] !== undefined) {
      arr.push(right[j]);
      j++;
    } else if (right[j] === undefined && left[i] !== undefined) {
      arr.push(left[i]);
      i++;
    } else if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else if (left[i] > right[j] || left[i] === right[j]) {
      arr.push(right[j]);
      j++;
    }
  }
  return arr;
}
