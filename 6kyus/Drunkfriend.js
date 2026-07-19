/* Array.from();
Convert something iterable or array-like into an array.
Array.from("hello");
Array.from([1, 2, 3], x => x * 2);
Array.of()
Create an array from the values you pass.
Array.of(1, 2, 3); */
let name="miguel";
console.log(Array.from(name));
let numbers="123";
console.log(Array.from(numbers,x=>x**2));// split and use later map can use the from make it easy