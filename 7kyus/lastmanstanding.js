function lastManStanding(n) {
  // loop though using map and then
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  let reverse = [];
  while (result.length > 1) {
    let results = result.filter((x, i) => i % 2 !== 0);
    result = results.reverse();
  }
  return Number(result.join(""));
}
