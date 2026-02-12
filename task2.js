//TASK1
// Variable declarations
let myName = "Phani";
let myAge = 39; // 
let areuLearningJS = true;
let experience; // Undefined: declared but no value assigned
let nothing = null;

// Printing values and types
console.log("Value:", myName, "| Type:", typeof myName);
console.log("Value:", myAge, "| Type:", typeof myAge);
console.log("Value:", areuLearningJS, "| Type:", typeof areuLearningJS);
console.log("Value:", experience, "| Type:", typeof experience);
console.log("Value:", nothing, "| Type:", typeof nothing);

// undefined: Means not defined any value. If we call a variable, without a value
// then it will return the value undefined.

//Null: we declare the memory and initiate the value, when the return value is "0" or 
// nothing that is Null.

//TASK2

let colors =["red", "green", "blue", "yellow", "black"];

// 1. Print first element (Index 0)
console.log("First element:", colors[0]);

// 2. Print last element using length
console.log("Last element:", colors[colors.length - 1]);

// 3. Print third element (Index 2)
console.log("Third element:", colors[2]);

// 4. Print total number of elements
console.log("Total number of elements:", colors.length);

//TASK3

let student = { 
    name: "Phanikumar",
    skills: ["HTML", "CSS", "JS"],
    experience: "1year", 
    location: "India"
};

// 1. Print name
console.log("Name:", student.name);

// 2. Print first skill 
console.log("First skill:", student.skills[0]);

// 3. Add new property: role
student.role = "Frontend Developer";

// 4. Print full object
console.log("Full Object:", student);

//TASK4

let x = 10;
let y = 3;

console.log("Addition (x + y):", x + y);
console.log("Subtraction (x - y):", x - y);
console.log("Multiplication (x * y):", x * y);
console.log("Division (x / y):", x / y);
console.log("Modulus (x % y):", x % y);
console.log("Exponentiation (x ** y):", x ** y);

//TASK5

let a = 5;

let postincr = a++; 
let b = 5;
let preincr = ++b; 

console.log("Post-increment Result:", postincr);
console.log("Pre-increment Result:", preincr);

//TASK6

let num = 3;

num **= 4; 

console.log("Result of num **= 4 is:", num);

// The number 3 multiply by four times i.e 3*3*3*3, hence the output will be 81.

//TASK7

console.log(5 == "5");      // true
console.log(5 === "5");     // false
console.log(0 == false);    // true
console.log(0 === false);   // false

// == is LoosytypeEq: this is will check only for value, if the value is 

// same then it will return "True".

// === is stictlytypeEq: This will check for both value and type, if both are same

// then it will return "True". If anyone is different, then it return "False"


//TASK8

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

//TASK9

let userRole = "manager"; 

if (userRole === "admin" || userRole === "manager") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//TASK10

let isLoggedIn = false;

// The "!" operator flips the boolean value
if (!isLoggedIn) {
    console.log("Please log in to continue.");
} else {
    console.log("Welcome back!");
}

//TASK11

let age = 17;  
let status = age >= 18 ? "Eligible" : "Not Eligible";

console.log(status); 


let user = {
    name: "Arun",
    age: 22,
    isLoggedIn: true,
    skills: ["JS", "React"]
};


console.log(`Name: ${user.name}, First Skill: ${user.skills[0]}`);
const isAdult = user.age >= 18;
console.log("Is user an adult?", isAdult);

if (user.isLoggedIn && user.age >= 18) {
    console.log("Access Allowed");
} else {
    console.log("Access Denied");
}

let loginMessage = user.isLoggedIn ? "User is Online" : "User is Offline";
console.log(loginMessage);

user.age++; 
console.log("New Age:", user.age);

user.skills.push("Node.js");
console.log("Updated Skills:", user.skills);




