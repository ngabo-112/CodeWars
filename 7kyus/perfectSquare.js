var isSquare = function (n) {
  let number = Math.sqrt(n);
  let Flot = Math.floor(number);
  if (Flot ** 2 === n) return true;
  return false;
};
