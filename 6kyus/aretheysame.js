function comp(array1, array2){
  let result=0;
  let value=0;
 if (typeof array1 !== "object" || typeof array2 !== "object" || array1 === null || array2 === null) {
    return false;
}
  if(array1.length==0 && array2.length==0)return true
 for(let i=0;i<array1.length;i++){
    result=array1[i]**2;
   let index = array2.indexOf(result);
     if(!array2.includes(result)){
         return false
     }
     
  array2.splice(index, 1);
}
  return true
}
 console.log(
   comp(
     [121, 144, 19, 161, 19, 144, 191, 11],
     [121, 14641, 20736, 36100, 25921, 361, 20736, 361],
   ),
 );
  