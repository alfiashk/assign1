// Question 9: Nested Array Operations
const orders = [
    {
      id: 1,
      customer: "John",
      items: [
        { product: "Laptop", price: 1000, quantity: 1 },
        { product: "Mouse", price: 25, quantity: 2 }
      ]
    },
    {
      id: 2,
      customer: "Jane",
      items: [
        { product: "Phone", price: 800, quantity: 1 },
        { product: "Case", price: 20, quantity: 1 },
        { product: "Case", price: 20, quantity: 1 }
      ]
    }
  ];
  

// a) Calculate the total value for each order
let total = {};

orders.forEach((order) => {
  let sum = 0;
  order.items.forEach((item) => {
    sum += item.price * item.quantity;
  });

  total[order.id] = sum;
});

//console.log(total);

// b) Find all unique products across all orders
let r = [];
let res = orders.forEach((e) => {
  e.items.forEach((i) => { 
    if (!r.includes(i.product)) {
      r.push(i.product);
    }
  });
});
//console.log(r);

// c) Get the customer who spent the most money
let ed = {};
let customer = orders.forEach((e) => { 
  let sum = 0;
  e.items.forEach((ord) => { 
    sum += ord.price * ord.quantity;
    
  });
  ed[e.customer] =  sum;
});
let cos = 0;
let cusName;

//console.log(ed);

for (let item in ed) { 
  if (ed[item] > cos) {
    cos = ed[item];
    cusName = item;
  }
}
//console.log(cusName,cos);


// d) Create a flat array of all items from all orders
let arr = orders.map((i) => i.items);
//console.log(arr.flat());

// e) Count the total quantity of all items sold
let sum = 0;
let ehe = orders.forEach((e) => { 
  e.items.forEach((ord) => { 
    sum += ord.quantity;
  });
});

console.log("total quantity: ",sum);