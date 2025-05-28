// ### Question 2: E-commerce Product Catalog
// Given this product array:

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
];

// a) Create a new array with prices converted to include a 10% tax
const newArr = products.map((prod) => {
    prod.price = prod.price + (prod.price / 100) * 10;
    return prod;
});
console.log(newArr);

// b) Generate an array of product summaries in the format: "Product: [name] - $[price] ([category])"
let summary = products.map((prod) => {
    return  `Product: ${prod.name} - ${prod.price} ([${prod.category}])`;
 });
console.log(summary);

// c) Create a new array where each product has a "discountPrice" property (20% off original price)
let disProd = products.map((prod) => {
    prod.discountPrice = prod.price - (prod.price * 20 / 100);
    return prod;
});
console.log(disProd);