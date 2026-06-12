function squaretheNumber(...x){
    let result=0;
 return x.map(t=>t*x.length).reduce((acc,val)=>acc+val,0);


}
console.log(squaretheNumber(123));