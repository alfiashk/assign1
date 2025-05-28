// ## Section C: Reduction and Aggregation

// ### Question 5: Shopping Cart Calculations


const cartItems = [
  { name: "T-shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];


// a) Calculate the total cost of all items
let total = cartItems.reduce((a, b) => a + b.price,0);
console.log(total);

// b) Find the most expensive single item
let exp = cartItems.filter((e) => e.price )


// c) Count the total number of items in the cart
// d) Create a summary object with totalItems, totalCost, and averageItemPrice
// e) Find the item with the highest total value (price × quantity)