function isIsogram(str) {
  let newstring = [...new Set(str.split(""))];
  return newstring.length == str.length ? true : false;
}
console.log(isIsogram("aba"));
