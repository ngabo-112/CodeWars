/* * 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */
function splitting(x){
 let res=[];
 for (let i=0;i<x.length;i+=2){
  res.push(x[i+1] ? `${x[i]}${x[i+1]}` :`${x[i]} _`);
 
 }
  return res;
}
console.log(splitting("abc"));
