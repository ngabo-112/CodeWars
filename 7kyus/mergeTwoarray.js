function mergeArrays(arr1, arr2) {
  let merged_arr = [...arr1, ...arr2];
  let merger = [...new Set(merged_arr)];
  return merger.sort((a, b) => a - b);
}
