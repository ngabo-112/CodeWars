function wave(str){
let newarr=[];
for(let i=0;i<str.length;i++){
      if (str[i] !== " ") newarr.push(str);
}
return newarr.map((x,i)=>{
 let arr=x.split("");
 arr[i]=arr[i].toUpperCase();
 let position=i;
 while(x[position]===" "){
    position ++
 }
 return arr.join("");

})
}
console.log(wave(
"two words"));