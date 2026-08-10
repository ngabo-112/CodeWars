function sumOfMinimums(arr) {
  return arr.map(x=>Math.min(...x)).reduce((acc,val)=>acc+val,0);
}
console.log(sumOfMinimums([ [ 1, 2, 3, 4, 5 ]       
, [ 5, 6, 7, 8, 9 ]    
, [ 20, 21, 34, 56, 100 ]  
]))