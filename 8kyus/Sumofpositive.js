function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((val, acc) => acc + val, 0);
}
