/* .Unique Products Report
You are given an array of orders:

const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];


Task:

Use for of loop, Set, and destructuring

Write a function createReport(orders) that returns:

{
uniqueProducts: ["Laptop","Mouse","Keyboard","Monitor"],
firstProduct:"Laptop",
totalUnique:4
} */



const orders = [
  { customer: "Ali", product: "Laptop" },
  { customer: "Sara", product: "Mouse" },
  { customer: "Ali", product: "Laptop" },
  { customer: "John", product: "Keyboard" },
  { customer: "Sara", product: "Mouse" },
  { customer: "Ali", product: "Monitor" },
];

function createReport(orders) {
  const uniqueSet = new Set();

  // for...of loop
  for (const { product } of orders) {
    // destructuring
    uniqueSet.add(product);
  }

  const uniqueProducts = [...uniqueSet];
  const [firstProduct] = uniqueProducts; // destructuring

  return {
    uniqueproduct:uniqueProducts,
    firstproducts:firstProduct,
    totalUnique: uniqueSet.size,
  };
}

console.log(createReport(orders));