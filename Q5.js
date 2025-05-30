// ## Section C: Reduction and Aggregation

// ### Question 5: Shopping Cart Calculations


const cartItems = [
  { name: "T-shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];


// a) Calculate the total cost of all items
let totalCost = cartItems.reduce((a, b) => a + b.price*b.quantity,0);
console.log(totalCost);

// b) Find the most expensive single item
let exp = cartItems.reduce((a, b) => {
  if (a.price > b.price) {
    return a;
} else {
    return b;
}
});
console.log(exp);

// c) Count the total number of items in the cart
let totalItems = cartItems.reduce((a,b) => a + b.quantity, 0);
console.log(totalItems); 

// d) Create a summary object with totalItems, totalCost, and averageItemPrice
let summary = {totalItems: `${totalItems}`, totalCost: `${totalCost}`, AveragePrice: `${(totalCost / totalItems).toFixed(2)}`};
console.log(summary);

// e) Find the item with the highest total value (price × quantity)
let highVal = cartItems.reduce((a, b) => { 
  if (a.price*a.quantity > b.price*a.quantity) {
    return a;
} else {
    return b;
}
} );
console.log(highVal);