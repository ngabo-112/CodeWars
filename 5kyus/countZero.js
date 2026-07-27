/* function zeros(n) {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  let firstNumber = result.toString().split("");
  let array = result.toString().split("").reverse().join("").toString();
  let secondNumber = BigInt(array).toString().split("");
  return firstNumber.length - secondNumber.length;
}
 */
function zeros(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}