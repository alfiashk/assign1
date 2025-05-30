// ### Question 11: Inventory Management


const inventory = [
  { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
  { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
  { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
  { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
];


// a) Find items that need reordering (stock <= reorderLevel)
// b) Calculate total stock value by category (assume price = stock * 10 for calculation)
// c) Find the item with the lowest stock percentage relative to reorder level
// d) Create a report showing category, total items, and items needing reorder
// e) Sort items by urgency (how far below reorder level they are)