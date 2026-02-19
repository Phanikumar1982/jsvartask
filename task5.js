
//Task1 Employee merge system

let teamA = [
  { name: "John", role: "Developer" },
  { name: "Arun", role: "Tester" }
];

let teamB = [
  { name: "Naveen", role: "Designer" },
  { name: "David", role: "Manager" }
];

let mergedTeams = [...teamA, ...teamB];

console.log(mergedTeams);

// 2. Add one new employee manually
mergedTeams.push({ name: "Madhu", role: "Developer" });

// 3. Clone the final array into backupTeam
let backupTeam = [...mergedTeams];

// 4. Remove last employee
mergedTeams.pop();

// 5. Add new employee at first position
mergedTeams.unshift({ name: "Phani", role: "Developer" });

console.log("Current Team:", mergedTeams);
console.log("Backup Team:", backupTeam);


//TASK2

let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary: 45000 };

// 1. Merge both objects
// emp1 and emp2 having the same keys, hence the second one (emp2) 
// will overwrite the first one (emp1).
let mergedemp = { ...emp1, ...emp2 };
console.log(mergedemp);


// 2. Update salary to 50000
let updatedEmp = { ...mergedemp, salary: 50000 };

// 3. Clone into new object
let finalEmployee = { ...updatedEmp };

// 4. Destructure name and salary
const { name, salary } = finalEmployee;

// 5. Print: "John earns 50000"
console.log(`${name} earns ${salary}`);


//Task3

let cart = ["Laptop", "Phone", "Tablet", "Watch"];

// Remove last product
cart.pop();

console.log(cart)

// Add two products at end
cart.push("Headphones", "Speaker");

console.log(cart);

// Add one product at beginning
cart.unshift("Mouse");

console.log(cart);

// Remove first product
cart.shift();

console.log(cart);

// Replace "Tablet" with "Camera" using splice
let indexTablet = cart.indexOf("Tablet");
if (indexTablet !== -1) {
    cart.splice(indexTablet, 1, "Camera");
}

console.log(cart);

// Check if "Phone" exists
let phoneExists = cart.includes("Phone");

//Finding watch exists

let watchIndex = cart.indexOf("Watch");

console.log(cart);
console.log("Phone exists:", phoneExists);
console.log("Index of Watch:", watchIndex);

//Task4

let marks = [78, 90, 66, 84, 99, 45];

// 1. Sort marks (correct way using compare function)
// (a - b) sorts in ascending order
marks.sort((a, b) => a - b); 

// 2. Reverse sorted marks
// Now they are in descending order (highest to lowest)
marks.reverse();

// 3. Slice top 3 marks
// slice(start, end) creates a new array without modifying the original
let topThree = marks.slice(0, 3);

// 4. Find index of 84
let index84 = marks.indexOf(84);

// 5. Replace 45 with 50 using splice
// We find the index of 45 first to ensure we replace the right value
let index45 = marks.indexOf(45);
if (index45 !== -1) {
  marks.splice(index45, 1, 50);
}

console.log("Sorted Marks (Descending):", marks);
console.log("Top 3 Marks:", topThree);
console.log("Index of 84:", index84);

//task5

let company = [
  "Stackly",
  ["Frontend", ["HTML", "CSS", ["JavaScript"]]]
];

// 1. Extract "JavaScript" normally
let jsNormal = company[1][1][2][0];

console.log("Normal:", jsNormal);

// 2. Extract using destructuring
let [
  companyName,
  [dept, [html, css, [jsDestructured]]]
] = company;

console.log("Destructured:", jsDestructured);

// 3. Flatten entire array
let flattened = company.flat(Infinity);

console.log("Flattened:", flattened);

// 4. Replace "CSS" with "Tailwind"

company[1][1].splice(1, 1, "Tailwind");

console.log("Updated company:", company);

//task6

function attendance(day, ...students) {

  console.log (`Day: ${day}`);

  console.log(`Total Students: ${students.length}`);


  console.log(`First Student: ${students[0]}`);

  console.log(`Last Student: ${students[students.length - 1]}`);

  return students;
}

let studentList = attendance("Monday", "John", "Arun", "David", "Naveen");

console.log("Returned students Array:", studentList);

//task7

let stock = [10, 20, 30, 40, 50];

stock.fill(0, 3);

stock.push(60, 70);

stock.shift();
console.log(stock)

let exists30 = stock.includes(30);

let lastIdx20 = stock.lastIndexOf(20);

stock.reverse();

console.log("Final Stock:", stock);
console.log("30 exists?", exists30);
console.log("Last index of 20:", lastIdx20);

//TASK8

let user = {
  name1: "Naveen",
  role: "Developer",
  skills: ["HTML", "CSS", "JavaScript"]
};

const {name1, role } = user;

const updatedUser = {
  ...user,
  skills: [...user.skills, "React"]
};


const userClone = { ...updatedUser };

const updatedProfile = { ...userClone, experience: "2 Years" };


console.log(`User ${name} has ${updatedProfile.skills.length} skills.`);
console.log("Final Profile:", updatedProfile);

//task9

let sales = [12000, 45000, 22000, 8000, 15000];


let ascending = [...sales].sort((a, b) => a - b);

let descending = [...sales].sort((a, b) => b - a);

let middleThree = ascending.slice(1, 4);

let lowestIndex = sales.indexOf(Math.min(...sales));
sales.splice(lowestIndex, 1, 10000);

let exists50000 = sales.includes(50000);

console.log("Ascending:", ascending);
console.log("Descending:", descending);
console.log("Middle 3:", middleThree);
console.log("Updated Sales:", sales);
console.log("50000 exists:", exists50000);
