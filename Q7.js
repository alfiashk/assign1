// ## Section D: Complex Operations

// ### Question 7: Employee Performance Tracking

const employees = [
  { name: "John", department: "IT", salary: 75000, projects: ["A", "B"] },
  { name: "Sarah", department: "Marketing", salary: 65000, projects: ["C"] },
  { name: "Mike", department: "IT", salary: 80000, projects: ["A", "D", "E"] },
  { name: "Lisa", department: "HR", salary: 60000, projects: ["B", "C"] },
  { name: "Tom", department: "Marketing", salary: 70000, projects: ["D"] }
];

// a) Group employees by department (return an object with department names as keys)

let emptyObj = {};
let res = employees.forEach((emp) => {
    if (!emptyObj[emp.department]) {
        emptyObj[emp.department] = []; //key is dept name, [] empty array is its value
        emptyObj[emp.department].push(emp);
    } else {
        emptyObj[emp.department].push(emp);
    }
});
//console.log(emptyObj);

// b) Find employees working on more than 2 projects
let emp = employees.filter((e) => e.projects.length > 2);
//console.log(emp);

// c) Calculate the average salary by department
let newObj = {};
let result = employees.forEach((emp) => {
    let dept = emp.department;
    if (!newObj[dept]) {
        newObj[dept] = []; //key is dept name, [] empty array is its value
        newObj[dept].push(emp);
    } else {
        newObj[dept].push(emp);
    }
});

let avgSal = {};
for (let dept in newObj) {
    let emp = newObj[dept];
    let sal = emp.reduce((a, b) => a + b.salary, 0);
    let avg = sal / emp.length;
    avgSal[dept] = avg;
}
//console.log(avgSal);

// d) Get a list of all unique projects across all employees
let projs = [];
let uniqueProj = employees.forEach((e) => {
    let p = e.projects;
    p.map((pro) =>
    {
        if (!projs.includes(pro)) {
            projs.push(pro)
        }
    });
});
console.log(projs);

// e) Find the highest-paid employee in each department
let high = employees.reduce((a,b) =>a.salary > b.salary? a:b);
console.log(high);