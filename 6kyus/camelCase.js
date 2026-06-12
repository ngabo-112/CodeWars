


const orders = [
    { customer: "Ali", product: "Laptop" },
    { customer: "Sara", product: "Mouse" },
    { customer: "Ali", product: "Laptop" },
    { customer: "John", product: "Keyboard" },
    { customer: "Sara", product: "Mouse" },
    { customer: "Ali", product: "Monitor" }
];a


const products =  [new Set (...orders.map(el=>el.product))]