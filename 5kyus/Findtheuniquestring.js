function findUniq(arr) {
let newarr = arr.map((x) => [
    ...new Set(x.toLowerCase().replace(/\s/,"").trim().split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))),
]);
let value=newarr.reduce((acc,val)=>{
    acc[val]=(acc[val] || 0)+1;
    return acc;
},{});


 let index = newarr.findIndex((val) => value[val] === 1);// please review this part

 return arr[index];

}
console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
 console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));// BbBb
 console.log(findUniq(["    ", "a", " "]));
