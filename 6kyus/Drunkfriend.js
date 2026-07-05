/* Give two arrays that have all the letters and how it should be done 
Split the word into after the word 
then each word loop and the word change the word having the from the page and push it into the array
Then join
 */
/* function decode(str){
    const arr = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z",
    ];
    const arr2=[];
    const arr3=[];
    arr2=str.split(' ');
    for (let word of arr2){
        for (let i in word ){
      arr3.push(word.replace(word[i],word[word.length-i]));   
        }
        
    }
    return arr3;
}
console.log(decode('yvvi')); */


function decode(str){
    const arr = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z",
    ];
    const arr3=[]
    const arr4=[]
     arr3.push(...str.split(" "));
     for (let word of arr3){
        for (let i in word){
            let ch= word[i];
            let index=arr.indexOf(ch.toLowerCase());
            if (index !== -1) {
              let letter = arr[25 - index];

              if (ch === ch.toUpperCase()) {
                letter = letter.toUpperCase();
              }

              word = word.replace(ch, letter);
            }
             
     }
     arr4.push(word);

}
return arr4.join(" ")
}


console.log(decode("yvvi"));