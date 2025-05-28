// ### Question 4: Sales Data Analysis


const salesData = [
  { month: "Jan", sales: 15000, region: "North" },
  { month: "Feb", sales: 18000, region: "South" },
  { month: "Mar", sales: 22000, region: "North" },
  { month: "Apr", sales: 19000, region: "East" },
  { month: "May", sales: 25000, region: "West" },
  { month: "Jun", sales: 21000, region: "South" }
];

// a) Filter months where sales exceeded $20,000
let fil = salesData.filter((e) => e.sales > 20000);
console.log(fil);

// b) Find the first month where sales were below $20,000
let firstMonth = salesData.find((e) => e.sales < 20000);
console.log(firstMonth);

// c) Check if any region had sales above $24,000
let check = salesData.filter((e) => e.sales > 24000);
console.log(check);

// d) Verify if all months had sales above $10,000
let allMonths = salesData.filter((e) => e.sales > 10000);
console.log(allMonths);