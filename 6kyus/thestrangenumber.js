function stray(numbers) {
  return numbers.filter(
    (x, i) => numbers.indexOf(x) === numbers.lastIndexOf(x),
  )[0];
}
