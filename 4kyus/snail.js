function snail(array) {
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;
  let newarr = [];

  while (top <= bottom && left <= right) {
    for (let i = top; i <= right; i++) {
      newarr.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      newarr.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        newarr.push(array[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        newarr.push(array[i][left]);
      }
      left++;
    }
  }
  return newarr;
}
