var capitals = function (word) {
  let arr1 = [];
  let arr2 = [];
  arr1 = word.replace(/[A-Z]/g, "!").split("");
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "!") {
      arr2.push(arr1.indexOf(arr1[i]));
      arr1[i] = "@";
    }
  }
  return arr2;
};
console.log(capitals("CodEWaRs"));