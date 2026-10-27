/* // algorithm
total = 0
n = 0

while total < m
    n++
    total += n³

if total == m
    return n
else
    return -1 */
function findNb(m) {
    let total=0;
    let n=0;
    while (total<m){
        n++;
        total+=n**3;
    }
    return total==m?n:-1;

}
console.log(findNb(1071225));