// ### Question 11: Inventory Management


const inventory = [
  { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
  { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
  { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
  { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
];


// a) Find items that need reordering (stock <= reorderLevel)
let reOrder = inventory.filter((e) => e.stock <= e.reorderLevel);
//console.log(reOrder);

// b) Calculate total stock value by category (assume price = stock * 10 for calculation)
let newObj = {};
let res = inventory.forEach((e) => { 
  let cato = e.category;
  if (!newObj[cato]) {
    newObj[cato] = [e];
  } else {
    newObj[cato].push(e);
  }
});
//console.log(newObj);

let totalStock = {};
for (let cat in newObj) {
    let cato = newObj[cat];
    let total = cato.reduce((a, b) => a + b.stock, 0);
    totalStock[cat] = total*10;
}
//console.log(totalStock);

// c) Find the item with the lowest stock percentage relative to reorder level =(stock / reorderLevel) * 100
const lowestPercent = inventory.reduce((a, b) => {
  let currentPercent = (b.stock / b.reorderLevel) * 100;
  let lowestPercent = (a.stock / a.reorderLevel) * 100;

  return currentPercent < lowestPercent ? b : a;
});

// console.log(lowestPercent);

// d) Create a report showing category, total items, and items needing reorder
let summary = {};
inventory.forEach((e) => { 
  let cato = e.category;
  if (!summary[cato]) {
    summary[cato] =  {
      totalItems: 0,
      reorderItems: 0
    };
  } 
  summary[cato].totalItems += 1;
  if (e.stock <= e.reorderLevel) {
    summary[cato].reorderItems += 1;
  }
  
});


console.log(summary);


// console.log(newObj);

// e) Sort items by urgency (how far below reorder level they are)
inventory.sort((a, b) => (b.reorderLevel - b.stock) - (a.reorderLevel - a.stock));
//console.log(inventory);