// ## Section B: Filtering and Searching

// ### Question 3: User Management System

const users = [
    { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
    { id: 2, username: "jane_smith", age: 32, isActive: false, role: "admin" },
    { id: 3, username: "bob_wilson", age: 19, isActive: true, role: "user" },
    { id: 4, username: "alice_brown", age: 28, isActive: true, role: "moderator" },
    { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" },
    { id: 6, username: "abs", age: 35, isActive: false, role: "user" }

  ];

// a) Find all active users over 21 years old
function findActive(users) {
    return users.filter((e) => e.isActive === true && e.age>21);
   
};
// console.log(findActive(users));

// b) Check if there are any inactive admin users
function findInActive(users) {
    return users.filter((e) =>  e.isActive == false && e.role ==="admin" );
   
};
//console.log(findInActive(users));

// c) Find the first user with "moderator" role
let firstUser = users.find((e) => e.role === "moderator")
//console.log(firstUser);

// d) Get all usernames of active users
let activeUsers = users.filter((e) => e.isActive ===true);
//console.log(activeUsers.map((e) => e.username ));

// e) Check if all users have usernames longer than 5 characters
let userArr = users.every((e) => e.username.length > 5);
console.log(userArr ? "yes" : "no");