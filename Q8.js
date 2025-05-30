// ### Question 8: Data Cleanup and Validation

const rawData = [
  "  Alice Johnson  ", "bob@email.com", "", "Charlie Brown", null, "diana.smith@test.co",
  "   ", "Eve Wilson", undefined, "frank.miller@domain.org", "Grace Lee"
];


// a) Remove all empty, null, or undefined values
let arr = rawData.filter((e) => {
    if (e ) return e;
} );
//console.log(arr);


// b) Trim whitespace from all remaining strings
let tr = arr.map((e)=> e.trim());
//console.log(tr);

// c) Separate email addresses from regular names
let email =[];
let nameArr = [];
let res = arr.filter((e) => e.includes('@') ? email.push(e) : nameArr.push(e));
//console.log(email, nameArr);

// d) Sort names alphabetically (excluding emails)
let result = arr.filter((e) => !e.includes('@'));
//console.log(result.sort());

// e) Validate that all emails contain '@' and '.'
let validate = email.every((e) => e.includes('@') && e.includes('.'));
console.log(validate);