function squaretheNumber(...x){
    let result=0;
  for(let i of x){
    result+=i*x.length;
  }
  return result;
  

}
console.log(squaretheNumber(1,2,3));