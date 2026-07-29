function cakes(recipe, available) {
  let arr = [];
  for (let n in recipe) {
    arr.push(Math.floor(available[n] / recipe[n]));
  }
  return arr.includes(NaN) ? 0 : Math.floor(Math.min(...arr));
}
