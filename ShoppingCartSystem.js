class ShoppingCart {
  constructor() {
    this.array = [];
  }

  addItem(item) {
    if (!this.array.includes(item)) {
      this.array.push(item);
    }
  }

  getItems() {
    return this.array;
  }
}

const cart = new ShoppingCart();

cart.addItem("Laptop");
cart.addItem("Mouse");
cart.addItem("Laptop");

console.log(cart.getItems()); // ["Laptop", "Mouse"]